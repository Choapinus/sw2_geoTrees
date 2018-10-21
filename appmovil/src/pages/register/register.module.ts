import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
<<<<<<< HEAD
import { register } from './register';

@NgModule({
  declarations: [
    register,
  ],
  imports: [
    IonicPageModule.forChild(register),
  ],
})
export class RegisterModule {}
=======
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
})
export class RegisterPageModule {}
>>>>>>> 4c1217bc5eac761c6f69b56ab14bd73dd808b40a
