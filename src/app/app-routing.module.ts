import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './ui/home/home.component';

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations:[
    LoginComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
