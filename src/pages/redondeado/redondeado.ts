import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlockPage } from '../block/block';
import { HomePage } from '../home/home';

/**
 * Generated class for the RedondeadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redondeado',
  templateUrl: 'redondeado.html',
})
export class RedondeadoPage {
  blockPage=BlockPage;
  homePage=HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedondeadoPage');
  }

}
