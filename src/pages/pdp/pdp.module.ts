import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdpPage } from './pdp';

@NgModule({
  declarations: [
    PdpPage,
  ],
  imports: [
    IonicPageModule.forChild(PdpPage),
  ],
})
export class PdpPageModule {}
