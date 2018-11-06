import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArbolPage } from '../arbol/arbol'
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapOptions, Marker, MarkerOptions } from '@ionic-native/google-maps';
import { HttpClient } from '@angular/common/http';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';
import { hostViewClassName, analyzeAndValidateNgModules } from '@angular/compiler';
import * as $ from 'jquery';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit
{
  map: any;
  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation,
    public http: HttpClient,
    public proveedor: ProArbolesProvider
    ){


  }

  openarbol(){
    this.navCtrl.push( ArbolPage );
  }

  ngOnInit(){
    this.loadMap();
  }


  public arboles: any;

  async loadMap() {
    const rta = await this.geolocation.getCurrentPosition();

    const myLatLng = {//se agrega por geoloc
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(myLatLng);
    var mapEle: HTMLElement = document.getElementById('map');
    
    let mapOptions: GoogleMapOptions = {
      center: myLatLng,
      zoom: 15,
      disableDefaultUI: true,
      zoomControl: true,
      rotateControl: true,
      fullscreenControl: true,
      controls: {
        myLocation: true,
        myLocationButton: true
      }
    }

    var map = new google.maps.Map(mapEle,mapOptions);

    this.addMarker(myLatLng,map,"xd");
    
    

    this.http.get(this.proveedor.apiUrl+'/all/')
    .subscribe((data:any) => {
      this.arboles = data.data;
      for(let arbol of this.arboles){

        this.addMarker({
          lat: Number(arbol.lat),
          lng: Number(arbol.lon)
        }
        ,map
        ,String(arbol.id));
      };
      console.log("fin for");

      
    },err => {
      console.log(err);
    });
  }

  addMarker(position,map, title){
    return new google.maps.Marker({
      position,
      map,
      title
    });
  }


  






/*
  map: GoogleMap;

  ngOnInit() {
    this.loadMap();
    //console.log('ionViewDidLoad PPrincipalPage');
  }

  loadMap() {

    // This code is necessary for browser
    /*Environment.setEnv({
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
