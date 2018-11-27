import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ArbolPage } from '../arbol/arbol'
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapOptions, Marker, MarkerOptions, GoogleMapsMapTypeId, Environment, GoogleMapsEvent } from '@ionic-native/google-maps';
import { HttpClient } from '@angular/common/http';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';
import { hostViewClassName, analyzeAndValidateNgModules } from '@angular/compiler';
import * as $ from 'jquery';
import { MapsProvider } from './../../providers/maps/maps';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
  
  map: any;
  constructor(
    public mapsProvider: MapsProvider,
    public navCtrl: NavController,
    private geolocation: Geolocation,
    public http: HttpClient,
    public proveedor: ProArbolesProvider
    ){
  }
  location:{
    latitude:number,
    longitude:number
  };

  @ViewChild('map') mapElement: ElementRef;
  
  openarbol(){
    this.navCtrl.push( ArbolPage );
  }

  ionViewDidLoad(){
    this.loadmaps();
  }


  public arboles: any;


  loadmaps(){
    let option = {//opciones no aplicadas en getCurrentPosition
      maximumAge: 0,
      timeout: 5000,
      enableHighAccuracy: true
    };

    this.geolocation.getCurrentPosition(option).then((position)=>{
      this.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      this.mapsProvider.init(this.location,this.mapElement);
    }).catch((error)=>{
      console.log('error getting location', error);
    });

  }
  



/*
  async loadMap() {


    var option = {//opciones no aplicadas en getCurrentPosition
      maximumAge: 0,
      timeout: 5000,
      enableHighAccuracy: true
    };

    const rta = await this.geolocation.getCurrentPosition(option);

    const myLatLng = {//se agrega por geoloc
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(myLatLng);
    var mapEle: HTMLElement = document.getElementById('map');
    
    let mapOptions: GoogleMapOptions = {
      controls: {
        'myLocation': true
      },
      center: myLatLng,
      zoom: 15,
      zoomControl: true,
      fullscreenControl: true,
      
      
    };

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



  }//fin

  async addMarker(position,map,title){
    return new google.maps.Marker({
      position,
      map,
      title: title,
      icon: {
        url: 'assets/imgs/comunitree.png',
        size:{
          width: 32,
          height: 24
        }
      }
    });
  
  }
*/
  }
