import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';

@NgModule({//lazy loading
  declarations: [
    Home,
  ],
  imports: [
    IonicPageModule.forChild(Home),
  ],
  exports:[
      Home
  ]
})
export class HomeModule {}
