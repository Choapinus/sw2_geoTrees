import { Injectable } from '@angular/core';
import { GoogleMaps, LatLng, GoogleMapsEvent, GoogleMapsMapTypeId, Marker, CameraPosition, ILatLng, HtmlInfoWindow, GoogleMapsAnimation } from '@ionic-native/google-maps';
import { HttpClient } from '@angular/common/http';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';


declare var google;

@Injectable()
export class NativeMapsProvider {
 
  map: any;
  tree: any;
  location:{
    latitude:number,
    longitude:number
  };
 
  constructor(
    public googleMaps: GoogleMaps,
    public proveedor: ProArbolesProvider,
    public alertCtrl: AlertController) {

      this.CargarDatos();
 
  }
 
  init(location, element){
 
    let latLng = new LatLng(location.latitude, location.longitude);
 
    let opts = {
      mapType: GoogleMapsMapTypeId.SATELLITE,
      controls:{
        'myLocationButton': true,
        'myLocation': true
      },
      camera: {
        latLng: latLng,
        zoom: 14
      }
    };

    
    this.map = this.googleMaps.create(element.nativeElement, opts);
    
    /*let marker: Marker = this.map.addMarkerSync({
      title: 'tree',
      position: latLng
    });*/
    

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      this.alertmap.present();
      console.log('Map is ready!');
      this.CargaCompleta();
    });

    
  }//fin init
  
  alertmap = this.alertCtrl.create({
    title: 'Map Ready',
    buttons: ['ok']
  });
  alerttree = this.alertCtrl.create({
    title: 'Tree ready',
    buttons: ['ok']
  });
  alerterror = this.alertCtrl.create({
    title: 'error',
    buttons: ['ok']
  });

  //########  Function add marker & CargarArboles
  


  public arboles: any;
  

  CargarDatos(){
    this.proveedor.obtenerarbol().subscribe(
      data => {
        this.arboles =data.data;
      });
  }

  CargarArboles(){
      for(let arbol of this.arboles){
        let latLng = new LatLng(arbol.lat, arbol.lon);
        this.addMarker(latLng, arbol.id, arbol);
      }
  }

  CargaCompleta(){
    this.CargarDatos();
    var that = this;
    setTimeout(function(){
      that.CargarArboles();
    },3000);
  }

  addMarker(position, title, arbol){
    let htmlInfoWindow = new HtmlInfoWindow();
    let frame: HTMLElement = document.createElement('div');
    frame.innerHTML = [
      '<h1>' + arbol._type.name +'</h1>',
      '<p>'+ 'id: '+ String(arbol.id) + '</p>',
      '<p> coordenadas: ' + arbol.lat +' / '+ arbol.lon+'</p>',
      '<p>descripción: </p>' + arbol.description + '<p></p>',
      '<p>' + 'tamaño: '+ arbol.size + '</p>',
      '<p> fecha: </p>'+ arbol.grounded + '<p></p>'
    ].join("");
    htmlInfoWindow.setContent(frame);
    let marker: Marker = this.map.addMarkerSync({
      title: String(title),
      position: position,
      animation: 'DROP',
      icon: {
        url: 'assets/imgs/comunitree.png'
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(()=>{

      htmlInfoWindow.open(marker);
      this.map.moveCamera({
        target: {lat: arbol.lat, lng: arbol.lon},
        zoom: 20,
        duration: 2000
      });
    });
  }
  //######## FIN  Function add marker & CargarArboles

 
}