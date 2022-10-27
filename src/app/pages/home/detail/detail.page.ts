import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Movie, Show } from '../../../interfaces/movie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  movie: Show = this.navParams.get('movie');
  constructor( private navParams: NavParams, private modalController: ModalController,) { }

  ngOnInit() {  }

  async dismissModal(){
    await this.modalController.dismiss(null);
  }


}
