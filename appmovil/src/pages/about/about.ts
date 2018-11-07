import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';
import { HttpClient } from '@angular/common/http';
import { NgForOf } from '@angular/common';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  


  public arboles: any;

  constructor(public navCtrl: NavController, 
    public proveedor:ProArbolesProvider, public http: HttpClient) {
      this.mostrararboles();
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


  ionViewDidLoad(){
  }

  async mostrararboles(){
    this.proveedor.obtenerarbol().subscribe(
      data =>{
        this.arboles = data.data;
      }
    )
  }

}
