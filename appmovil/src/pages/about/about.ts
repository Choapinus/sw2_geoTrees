import { Component } from '@angular/core';
import { NavController, Tab } from 'ionic-angular';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';
import { HttpClient } from '@angular/common/http';
import { NgForOf } from '@angular/common';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import { HomePage } from '../home/home';
import { NativeMapsProvider } from '../../providers/native-maps/native-maps';
import { JsMapsProvider } from '../../providers/js-maps/js-maps';
import { animate } from '@angular/core/src/animation/dsl';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  


  public arboles: any;

  constructor(
    public navCtrl: NavController, 
    public proveedor:ProArbolesProvider, 
    public http: HttpClient,
    public nativeMap: NativeMapsProvider,
    public jsMap: JsMapsProvider) {
      this.CargarDatos();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.proveedor.obtenerarbol().subscribe(
      data =>{
        this.arboles = data.data;
      }
    )
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  getImg(){
    
  }
  ionViewDidLoad(){
  }




  CargarDatos(){
    this.proveedor.obtenerarbol().subscribe(
      data => {
        this.arboles =data.data;
      });
  }


}
