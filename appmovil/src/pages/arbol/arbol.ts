import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Button } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { stringify } from '@angular/core/src/util';
/**
 * Generated class for the ArbolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arbol',
  templateUrl: 'arbol.html',
})
export class ArbolPage {
  //coordenadas
  public lat:any;
  public lon:any;
  //arbol
  public nombre:any;
  public nombrecientifico:any;
  public descripcion:any;
  public familia:any;
  public orden:any;
  public clase:any;
  public subclase:any;
  public origen:any;
  public preservacion:any;
  public colorcorteza:any;
  //arbol general
  public descripciongeneral:any;
  public tamano:any;
  public circunferencia:any;
  public fecha:any;
  //imagen
  public fotografia :any;

  constructor(
    public navCtrl: NavController, 
    public camera: Camera, 
    public geo: Geolocation,
    public proveedor:ProArbolesProvider,
    public http: HttpClient,
    private alertCtrl: AlertController) {

  }
  
  

  ionViewDidLoad() {
    


    console.log('ionViewDidLoad ArbolPage');
  }


  mylocation(){
    console.log("inicio geolo");
    this.geo.getCurrentPosition(option).then( pos => {
      this.lat = pos.coords.latitude;
      this.lon = pos.coords.longitude;
      console.log("position"+this.lat+"  "+this.lon);
    }

    ).catch( err => {
      console.error("hola");
      console.error(err);
      alertgps.present();
    });
    let alertgps = this.alertCtrl.create({//alerta de gps
      title: 'Error de GPS',
      subTitle: 'No se pudo detectar su ubicación',
      buttons: [{
        text: 'Dar permisos',
        handler: () =>{
          //dar permisos
        }
      },
      {
        text: 'Cancelar',
        handler: () => {
          //cancelar
        }
      }
      ]
    });
    //fin alerta gps

    var option = {
      maximumAge: 0,
      timeout: 5000,
      enableHighAccuracy: true
    };
  }

  sacarfoto(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetHeight: 1000,
      targetWidth: 1000,
      quality: 100
    }

    

    this.camera.getPicture(options).
    then(imageData => {
     this.fotografia = 'data:image/jpeg;base64,' + imageData;
    }).catch(error =>{
      console.error(error);
      
    });

    
  }
  
  subir(){
    var fechatemp:any;
    fechatemp = this.fecha.charAt(8)
    +this.fecha.charAt(9)
    +"/"
    +this.fecha.charAt(5)
    +this.fecha.charAt(6)
    +"/"
    +this.fecha.charAt(0)
    +this.fecha.charAt(1)
    +this.fecha.charAt(2)
    +this.fecha.charAt(3);

    console.log(this.fecha);
    console.log(fechatemp);
    let datos = {
      type_id:'1', 
      description: this.descripcion,
      lon: this.lon,
      lat: this.lat,
      size: this.tamano,
      grounded: fechatemp,
      circumference: this.circunferencia,
      photos: this.fotografia
      //hazard: ['1','2']
    }

/*
    var data ={
      json: JSON.stringify(json),
    }
*/

    console.log(this.proveedor.apiUrl+'/agregar/');
    $.ajax({
      url: this.proveedor.apiUrl+'/agregar/',
      type: 'post',
      dataType: 'json',
      data: datos,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      // contentType: 'application/json', <-- no need this.
      success: function(json) {
        if (json) {
            alert('ok');
        } else {
            alert('failed');
        }
      },
    });


  }

}
