import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController, ModalController } from '@ionic/angular';
import { Embedded, Movie, Show } from '../../interfaces/movie';
import { DetailPage } from './detail/detail.page';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  moviesList: Movie[] = [];
  moviesListTemp: Movie[] = [];
  movieSearch: Embedded[]= [];
  search = false;
  indexMin = 0;
  indexMax = 100;
  constructor(private homeService: HomeService, public loadingController: LoadingController,
    public modalController: ModalController) {}

  async ngOnInit() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
    });
    await loading.present();
    this.fillData();
  }

  fillData(){
    if(this.moviesListTemp.length === 0){
      this.homeService.list().subscribe({
        next: async (res) => {
          this.moviesList.push(...res);
          let transform = this.paginate(this.moviesList);
          this.moviesListTemp.push(... transform);
          this.sumIndex();
          this.loadingController.dismiss();
        },
        error: err => console.log(err)
      });
    }
  }

  async navigate(movie: Show){
    await this.presentModal(movie);
  }

  async presentModal(movie: Show) {
    const modal = await this.modalController.create({
      component: DetailPage,
      componentProps: {
        movie
      },
      cssClass: 'my-custom-class',
      presentingElement: await this.modalController.getTop(),
      keyboardClose: false,
      backdropDismiss: false
    });

    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned.data);
    });
    return await modal.present();

  }

  async getItems(ev){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
    });
    
    const val = ev.target.value;
    if (val.length > 1){
      await loading.present();
      this.search = true;
      this.homeService.searchLike(val).subscribe({
        next: async (res) => {
          this.movieSearch = [];
          this.movieSearch.push(...res);
          this.loadingController.dismiss();
        },
        error: err => {
          console.log(err);
          this.loadingController.dismiss();
        }
      }
      );
    } else if (val.length === 0){
      this.movieSearch = [];
      // this.moviesList = [];
      // this.moviesListTemp = [];
      // this.fillData();
      this.search = false;

    }
    if(this.loadingController){
      this.loadingController.dismiss();
    }
    
  }


  paginate = function (array) {
    return array.filter(
      (x, index) => index >= this.indexMin && index < this.indexMax
    );
    
  }

  sumIndex(){
    this.indexMin = this.indexMax;
    this.indexMax+=100;
  }

  loadData(){
    if(this.moviesList.length === this.moviesListTemp.length){
      this.infiniteScroll.disabled = true;
      return;
    }

    let transform = this.paginate(this.moviesList);
    this.moviesListTemp.push(... transform);
    this.sumIndex();
    this.infiniteScroll.complete();
  }


}
