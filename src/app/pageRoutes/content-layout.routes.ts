import { Routes } from '@angular/router';


//Route for content Layout with out sidebar

export const content_routes: Routes = [
   { 
       path: 'auth',
       loadChildren: () => import('./../pages/onboard/onboard.module').then(m => m.OnboardModule)
   }

]