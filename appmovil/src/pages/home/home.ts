import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { PPrincipal } from '../p-principal/p-principal';

@IonicPage()//importante
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {// lazy loading 

  username:string;
  password:string;

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.push("PPrincipal");
    /*console.log("Username: " + this.username);
    console.log("Password: " + this.password);*/
  }
  goRegister(){
    this.navCtrl.push("register");
  }


}
