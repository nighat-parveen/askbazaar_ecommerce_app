import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';


@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductsComponent
  ],
  providers:[]
})
export class ProductModule { }
