import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmControlComponent } from './pages/atm-control/atm-control.component';
import { AtmSearchComponent } from './pages/atm-search/atm-search.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'busqueda-cajeros',
    component: AtmSearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'control',
    component: AtmControlComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
