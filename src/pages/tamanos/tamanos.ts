import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OutlinePage } from '../outline/outline';
import { HomePage } from '../home/home';
/**
 * Generated class for the TamanosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tamanos',
  templateUrl: 'tamanos.html',
})
export class TamanosPage {
 
outlinePage=OutlinePage;
homePage=HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TamanosPage');
  }

}
