import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PPrincipalPage } from '../p-principal/p-principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.push(PPrincipalPage);
    /*console.log("Username: " + this.username);
    console.log("Password: " + this.password);*/
  }
  goRegister(){
    this.navCtrl.push("register");
  }


}
