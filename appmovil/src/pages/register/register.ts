import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class register {
  username:string=null;
  password:string=null;
  repassword:string=null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    if(this.username==null || this.repassword==null || this.password==null){
      alert("Rellene los campos ");
    }else if(this.password != this.repassword){
      alert("las constraseñas no coinciden");
    }else{
      alert("REGISTRO")
    }
  }
}
