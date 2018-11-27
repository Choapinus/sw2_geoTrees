import { Injectable } from '@angular/core';
import { GoogleMaps, LatLng, GoogleMapsEvent, GoogleMapsMapTypeId } from '@ionic-native/google-maps';
import { HttpClient } from '@angular/common/http';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';
import { AlertController, Button } from 'ionic-angular';

declare var google;

@Injectable()
export class NativeMapsProvider {
 
  map: any;
 
  constructor(public googleMaps: GoogleMaps,
    public http: HttpClient, 
    public proveedor: ProArbolesProvider,
    public alertCtrl: AlertController) {
 
  }
 
  init(location, element){
 
    let latLng = new LatLng(location.latitude, location.longitude);
 
    let opts = {
      mapType: GoogleMapsMapTypeId.ROADMAP,
      controls:{
        'myLocationButton': true,
        'myLocation': true
      },
      camera: {
        latLng: latLng,
        zoom: 11,
        tilt: 30
      }
    };

    
    this.map = this.googleMaps.create(element.nativeElement, opts);
    this.addMarker(latLng,this.map);
    

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {

      this.CargarArboles(this.map);
      this.alertmap.present();
      console.log('Map is ready!');
    });

    
  }
  
  alertmap = this.alertCtrl.create({
    title: 'Map Ready',
    buttons: ['Dismiss']
  });

  //########  Function add marker & CargarArboles
  addMarker(position, map){
    var marker = new google.maps.Marker({
      position:position,
      map: map
    });
  }

  public arboles: any;
  
  CargarArboles(map){
    console.log("CARGAR ARBOLES");
    console.log(this.http.get('http://www.comunitree.tk:8081/arbol/all/'));
    this.http.get('http://www.comunitree.tk:8081/arbol/all/')
    .subscribe((data:any) => {
      this.arboles = data.data;
      for(let arbol of this.arboles){
        var myLatlng = new google.maps.LatLng(parseFloat(arbol.lat),parseFloat(arbol.lon));
        console.log(arbol.lat,  arbol.lon);

        this.addMarker(
          myLatlng
          ,map);
        
      };
      console.log("fin for");

      
    },err => {
      console.log(err);
    });
  }
  //######## FIN  Function add marker & CargarArboles

 
}