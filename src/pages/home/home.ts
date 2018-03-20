import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TamanosPage } from '../tamanos/tamanos';
import { ColorPage } from '../color/color';
import { OutlinePage } from '../outline/outline';
import { ClearPage } from '../clear/clear';
import { RedondeadoPage } from '../redondeado/redondeado';
import { BlockPage } from '../block/block';
import { FullPage } from '../full/full';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tamanosPage=TamanosPage;
  colorPage=ColorPage;
  outlinePage=OutlinePage;
  clearPage=ClearPage;
  redondeadoPage=RedondeadoPage;
  blockPage=BlockPage;
  fullPage=FullPage;

  constructor(public navCtrl: NavController) {  }


}
