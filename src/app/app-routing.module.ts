import { content_routes } from './pageRoutes/content-layout.routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: content_routes
  
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
        preloadingStrategy: PreloadAllModules
      }
    
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
