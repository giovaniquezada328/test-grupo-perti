import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Embedded, Movie, Show } from '../../interfaces/movie';
import { DetailPage } from './detail/detail.page';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  moviesList: Movie[] = [];
  movieSearch: Embedded[]= [];
  search = false;
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
    this.homeService.list().subscribe({
      next: async (res) => {
        console.log(res);
        this.moviesList.push(...res);
        this.loadingController.dismiss();
      },
      error: err => console.log(err)
    });
    // this.homeService.list().subscribe( movies => this.moviesList.push(...movies));

  }

  async navigate(movie: Show){
    console.log(movie);
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
    await loading.present();
    const val = ev.target.value;
    // console.log(val.length, val);
    if (val.length > 1){
      this.search = true;
      this.homeService.searchLike(val).subscribe({
        next: async (res) => {
          console.log(res);
          this.movieSearch = [];
          this.movieSearch.push(...res);
          console.log(this.movieSearch);
          this.loadingController.dismiss();
        },
        error: err => console.log(err)
      }
      );
    } else if (val.length === 0){
      this.movieSearch = [];
      this.moviesList = [];
      this.fillData();
      this.search = false;
      this.loadingController.dismiss();
    }
  }

}
