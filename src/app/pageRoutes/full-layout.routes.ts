import { Routes } from '@angular/router';


export const full_layout: Routes = [
    {
        path: 'product',
        loadChildren: () => import('./../pages/product/product-routing.module').then(m => m.ProductRoutingModule)
    }
]