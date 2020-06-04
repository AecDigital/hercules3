import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerramientasRoutingModule } from './herramientas-routing.module';
import { HerramientasHomeComponent } from './herramientas-home/herramientas-home.component';


@NgModule({
  declarations: [HerramientasHomeComponent],
  imports: [
    CommonModule,
    HerramientasRoutingModule
  ]
})
export class HerramientasModule { }
