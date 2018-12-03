import { Component, ViewChild  } from '@angular/core';
import { NavController, Content  } from 'ionic-angular';
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

  @ViewChild(Content) content: Content;
  


  public arboles: any;

  constructor(
    public navCtrl: NavController, 
    public proveedor:ProArbolesProvider, 
    public http: HttpClient,
    public nativeMap: NativeMapsProvider,
    public jsMap: JsMapsProvider) {
      this.CargarDatos();
      this.searchQuery = '';
      
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


  irArriba() {
    this.content.scrollToTop(500);
  }

  ionViewDidLoad(){
  }


  searchQuery: string = '';
  items = [];
  initializeItems() {
    for( let arbol of this.arboles){
      this.items[0]=arbol.id;
    }
    console.log(" ARBOLES "+this.arboles);
    var i=0;
    console.log(this.items[0]);
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.items = this.items.filter((v) => {
      if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }




  CargarDatos(){
    this.proveedor.obtenerarbol().subscribe(
      data => {
        this.arboles =data.data;
      });
  }


}
