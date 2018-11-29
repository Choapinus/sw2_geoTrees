import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ArbolPage } from '../arbol/arbol'
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapOptions, Marker, GoogleMapsMapTypeId, Environment, GoogleMapsEvent, MarkerOptions, LatLng } from '@ionic-native/google-maps';
import { HttpClient } from '@angular/common/http';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';
import { hostViewClassName, analyzeAndValidateNgModules } from '@angular/compiler';
import * as $ from 'jquery';
import { MapsProvider } from './../../providers/maps/maps';
import { JsMapsProvider } from '../../providers/js-maps/js-maps';
import { NativeMapsProvider } from '../../providers/native-maps/native-maps';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
  
  map: any;
  tree: any;
  constructor(
    public mapsProvider: MapsProvider,
    public navCtrl: NavController,
    private geolocation: Geolocation,
    public http: HttpClient,
    public proveedor: ProArbolesProvider,
    public nativeMap: NativeMapsProvider,
    public jsMap: JsMapsProvider){
  }
  location:{
    latitude:number,
    longitude:number
  };

  @ViewChild('map') mapElement: ElementRef;
  
  openarbol(){
    this.navCtrl.push( ArbolPage );
  }

  async ionViewDidLoad(){
    await this.loadmaps();
    await this.CargarDatos();
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


  addMarker(position, map){
    console.log(position);
    new google.maps.Marker({
      position: position,
      map: map
    });
  }


  
  CargarDatos(){
    
    this.http.get(this.proveedor.apiUrl+'/all/').subscribe((datos:any) =>{
      this.tree = datos.data;
      
    });
    return this.tree;
  }


  CargarArboles(map){
    
    this.http.get(this.proveedor.apiUrl+'/all/')
    .subscribe((data:any) => {
      this.arboles = data.data;
      for(let arbol of this.arboles){
        var myLatlng = new google.maps.LatLng(parseFloat(arbol.lat),parseFloat(arbol.lon));
        console.log(myLatlng);
        new google.maps.Marker({
          position: myLatlng,
          map: this.jsMap.map
        });
        
      };
      console.log("fin for");

      
    },err => {
      console.log(err);
    });
  }

  }
