import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ArbolPage } from '../pages/arbol/arbol'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapComponent } from '../components/google-map/google-map';
import { ProArbolesProvider } from '../providers/pro-arboles/pro-arboles';
import { HttpClientModule } from '@angular/common/http';
import { ArbolPageModule } from '../pages/arbol/arbol.module';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@NgModule({
  declarations: [
    MyApp,
    //ArbolPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GoogleMapComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ArbolPageModule,
    IonicModule.forRoot(MyApp, {
      preloadModules:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArbolPage,
  ],
  providers: [
    AndroidPermissions,
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProArbolesProvider,
  ]
})
export class AppModule {}
