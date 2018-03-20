import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ClearPage } from '../clear/clear';

/**
 * Generated class for the OutlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-outline',
  templateUrl: 'outline.html',
})
export class OutlinePage {

  homePage=HomePage;
  clearPage=ClearPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutlinePage');
  }

}
