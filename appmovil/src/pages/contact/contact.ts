import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArbolPage } from '../arbol/arbol';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(private navCtrl: NavController) {

  }
  openarbol(){
    this.navCtrl.push( ArbolPage );
  }

}
