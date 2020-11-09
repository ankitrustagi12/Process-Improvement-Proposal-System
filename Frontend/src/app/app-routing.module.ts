import { ResetLinkComponent } from './reset-link/reset-link.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path : '',component:HomeComponent},
  {path : 'login/:id',component:HomeComponent},
  {path : 'register',component:RegisterComponent},
  {path : 'home',component:HomeComponent},
  {path : 'welcome',component:LandingPageComponent},
  {path : 'resetLink', component: ResetLinkComponent},
  {path : '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
