import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { register } from './register';

@NgModule({//lazy loading
  declarations: [
    register,
  ],
  imports: [
    IonicPageModule.forChild(register),
  ],
})
export class RegisterModule {}
