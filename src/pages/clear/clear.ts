import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RedondeadoPage } from '../redondeado/redondeado';
/**
 * Generated class for the ClearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clear',
  templateUrl: 'clear.html',
})
export class ClearPage {
  homePage=HomePage;
  redondeadoPage=RedondeadoPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClearPage');
  }

}
