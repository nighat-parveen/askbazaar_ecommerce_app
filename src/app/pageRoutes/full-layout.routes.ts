import { Routes } from '@angular/router';

export const full_layout: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./../pages/product/product.module').then((m) => m.ProductModule),
  },
];
