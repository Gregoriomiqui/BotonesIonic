import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TamanosPage } from '../tamanos/tamanos';
import { HomePage } from '../home/home';
/**
 * Generated class for the ColorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-color',
  templateUrl: 'color.html',
})
export class ColorPage {

  tamanosPage=TamanosPage;
  homePage=HomePage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorPage');
  }

}
