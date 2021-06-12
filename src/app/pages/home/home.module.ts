import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BannersComponent } from './banners/banners.component';
import { OffersComponent } from './offers/offers.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannersComponent,
    OffersComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
