import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { HomeComponent } from './home/home.component';
import { AddServiceComponent } from './add-service/add-service.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddServiceComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
