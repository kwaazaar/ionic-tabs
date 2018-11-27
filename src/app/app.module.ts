import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WebIntent } from '@ionic-native/web-intent';

import { MenuService } from '../services/menu-service';
import { MenuPage } from '../pages/menupage/menupage';

import { AuthService } from './../services/auth.service';

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    TabsPage,
    MenuPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    TabsPage,
    MenuPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WebIntent,
    MenuService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
