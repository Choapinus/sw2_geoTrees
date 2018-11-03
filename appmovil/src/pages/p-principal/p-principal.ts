import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Geolocation } from '@ionic-native/geolocation';
//import { TranslateService, TranslateCompiler } from '@ngx-translate/core';

import {
  GoogleMaps,
  GoogleMap,
  //GoogleMapsEvent,
  GoogleMapOptions,
  //Marker,
  Environment
} from '@ionic-native/google-maps';
import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';


@Component({
  selector: 'page-p-principal',
  templateUrl: 'p-principal.html'
})
export class PPrincipalPage {

  irperfil(){
    this.navCtrl.push(PerfilPage);
  }
  regresar(){
    this.navCtrl.setRoot(PPrincipalPage);
  }

  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams /*,private geolocation: Geolocation*/) {
  }

  ionViewDidLoad() {
    this.loadMap();
    //console.log('ionViewDidLoad PPrincipalPage');
  }

  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAO_K67syAy4rYr8ROBCsbQGmMW9Knzy8Y&callback=initMap',
      'API_KEY_FOR_BROWSER_DEBUG': 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAO_K67syAy4rYr8ROBCsbQGmMW9Knzy8Y&callback=initMap'
    });

    let mapOptions: GoogleMapOptions = {
      controls: {
        compass: true,
        myLocation: true,
        myLocationButton: true,
        mapToolbar: true
      },
      camera: {
         target: {
           lat: -33.599623, 
           lng: -70.577780
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);


/*
    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: -33.610554,
        lng: -70.594103
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
*/
  }



}
