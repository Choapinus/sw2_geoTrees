import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  public arboles: any;

  constructor(public navCtrl: NavController, 
    public proveedor:ProArbolesProvider, public http: HttpClient) {
      this.proveedor.obtenerarbol().subscribe(
        data =>{
          this.arboles = data.data;
        }
      )
  }
  ionViewDidLoad(){/*
    this.proveedor.obtenerarbol().subscribe(
      data => {this.arboles= data;},
      (error)=>{console.log(error);}
    )*/
  }
  

}
