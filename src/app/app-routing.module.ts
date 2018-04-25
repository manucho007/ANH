import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './ui/home/home.component';
import { MenuEstacionServicioComponent } from './estacion-servicio/menu-estacion-servicio/menu-estacion-servicio.component';
import { InspeccionInicialComponent } from './estacion-servicio/inspeccion-inicial/inspeccion-inicial.component';
import { PlanillaInspeccionIniComponent } from './estacion-servicio/planilla-inspeccion-ini/planilla-inspeccion-ini.component';

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'menuEstacionServicio',
  component: MenuEstacionServicioComponent
  },
  {
  path: 'inspeccionInicial',
  component: InspeccionInicialComponent
  },
  {
  path: 'planillaInicial',
  component: PlanillaInspeccionIniComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations:[
    LoginComponent,
    HomeComponent,
    MenuEstacionServicioComponent,
    InspeccionInicialComponent,
    PlanillaInspeccionIniComponent
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
