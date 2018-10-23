import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { TranslateService, TranslateCompiler } from '@ngx-translate/core';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';


@Component({
  selector: 'page-p-principal',
  templateUrl: 'p-principal.html',
})
export class PPrincipalPage {


  irpaginaprincipal(){
    this.navCtrl.push(PPrincipalPage);
  }
  irperfil(){
    this.navCtrl.push("Perfil");
  }
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams /*,private geolocation: Geolocation*/) {
  }

  ionViewDidLoad() {
    //this.loadMap();
    //console.log('ionViewDidLoad PPrincipalPage');
  }

  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '',
      'API_KEY_FOR_BROWSER_DEBUG': ''
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: -33.610554,
           lng: -70.594103
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

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
  }
}
