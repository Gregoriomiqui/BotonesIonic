import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TamanosPage } from '../pages/tamanos/tamanos';
import { ColorPage } from '../pages/color/color';
import { OutlinePage } from '../pages/outline/outline';
import { ClearPage } from '../pages/clear/clear';
import { RedondeadoPage } from '../pages/redondeado/redondeado';
import { FullPage } from '../pages/full/full';
import { BlockPage } from '../pages/block/block';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TamanosPage,
    ColorPage,
    OutlinePage,
    ClearPage,
    RedondeadoPage,
    FullPage,
    BlockPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TamanosPage,
    ColorPage,
    OutlinePage,
    ClearPage,
    RedondeadoPage,
    FullPage,
    BlockPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
