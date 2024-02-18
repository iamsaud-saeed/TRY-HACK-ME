import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { LoginComponent } from 'src/app/modals/login/login.component';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { RedTeamComponent } from './shared/red-team/red-team.component';


export const routes: Routes = [
  {
    path: 'signup',
    loadComponent: () => import('./modals/signup/signup.component').then(m => m.SignupComponent),
  },

  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'blue-team',
    loadComponent: () => import('./shared/blue-team/blue-team.component').then(m => m.BlueTeamComponent),
  },
  {
    path: 'red-team',
    loadComponent: () => import('./shared/red-team/red-team.component').then(m => m.RedTeamComponent),
  },
  {
    path: 'compete',
    loadComponent: () => import('./shared/compete/compete.component').then(m => m.CompeteComponent),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
