import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  username:string;
  password:string;

  constructor(public navCtrl: NavController) {

  }

  login(){
    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
  }
  goRegister(){
    this.navCtrl.push("register");
  }


}
