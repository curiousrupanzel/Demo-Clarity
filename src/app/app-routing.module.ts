import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { VerbalPracticeComponent } from './verbal-practice/verbal-practice.component';
import { QuantPracticeComponent } from './quant-practice/quant-practice.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'dash',
    component: DashboardHomeComponent
  },
  {
    path: 'verbal',
    component: VerbalPracticeComponent
  },
  {
    path: 'quant',
    component: QuantPracticeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
