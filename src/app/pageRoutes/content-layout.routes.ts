import { Routes } from '@angular/router';

//Route for content Layout with out sidebar

export const content_routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./../pages/onboard/onboard.module').then((m) => m.OnboardModule),
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./../pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./../pages/cart/cart.module').then((m) => m.CartModule),
  },
];
