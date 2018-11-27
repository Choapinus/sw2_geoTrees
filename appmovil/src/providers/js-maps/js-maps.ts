import { Injectable } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { HttpClient } from '@angular/common/http';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';

declare var google;
@Injectable()
export class JsMapsProvider {
 
  map: any;
 
  constructor(
    private http: HttpClient, 
    public proveedor: ProArbolesProvider
  ) {
    
  }
 
  init(location, element){
    let latLng = new google.maps.LatLng(location.latitude, location.longitude);
 
    let opts = {
      center: latLng,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    this.map = new google.maps.Map(element.nativeElement, opts);
    this.addMarker(latLng,this.map);
    
    this.CargarArboles(this.map);

    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
    
    
  }

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



 
}