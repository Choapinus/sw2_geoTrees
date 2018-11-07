import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

@IonicPage({
  name: 'page-arbol',
  priority: 'high'
})
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
    public http: HttpClient) {

  }
  

  ionViewDidLoad() {
    this.geo.getCurrentPosition().then( pos => {
      this.lat = pos.coords.latitude;
      this.lon = pos.coords.longitude;
    }

    ).catch( err => console.log(err));


    console.log('ionViewDidLoad ArbolPage');
  }

  refrescarCoord(){

    this.geo.getCurrentPosition().then( pos => {
      this.lat = pos.coords.latitude;
      this.lon = pos.coords.longitude;
    }
    ).catch( err => console.log(err));

  }

  sacarfoto(){
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.fotografia = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
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
