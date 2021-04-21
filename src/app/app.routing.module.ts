import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TabPage } from './pages-base/tab/tab.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages-base/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logup',
    loadChildren: () => import('./pages-base/logup/logup.module').then( m => m.LogupPageModule)
  },
  {
    path: 'pass',
    loadChildren: () => import('./pages-base/pass/pass.module').then( m => m.PassPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages-base/tab/tab.module').then( m => m.TabPageModule)
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
