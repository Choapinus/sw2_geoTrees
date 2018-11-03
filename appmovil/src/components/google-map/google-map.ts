import { Component, ViewChild } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  //GoogleMapsEvent,
  GoogleMapOptions,
  //Marker,
  //Environment
} from '@ionic-native/google-maps';
/**
 * Generated class for the GoogleMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {
  map: GoogleMap;
  constructor() {
  }

  ngOnInit(){
    this.loadMap();
  }
  
  loadMap() {

    // This code is necessary for browser
    

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }

}
