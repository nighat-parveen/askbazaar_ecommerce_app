import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { content_routes } from './pageRoutes/content-layout.routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { full_layout } from './pageRoutes/full-layout.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

  // public routes division
  {
    path: '',
    component: ContentLayoutComponent,
    children: content_routes
  
  },

  // dashboard Routes division
  {
    path: '',
    component: MainLayoutComponent,
    children: full_layout
  },

  {
    path: '**',
    redirectTo: 'auth/login'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        // add hash url
        useHash: true, 
        // for preload modules
        // preloadingStrategy: PreloadAllModules
      }
    
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
