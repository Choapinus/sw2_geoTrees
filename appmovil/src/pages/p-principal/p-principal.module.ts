import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PPrincipal } from './p-principal';

@NgModule({
  declarations: [
    PPrincipal,
  ],
  imports: [
    IonicPageModule.forChild(PPrincipal),
  ],
})
export class PPrincipalModule {}
