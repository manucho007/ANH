import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './ui/home/home.component';
import { MenuEstacionServicioComponent } from './estacion-servicio/menu-estacion-servicio/menu-estacion-servicio.component';
import { InspeccionInicialComponent } from './estacion-servicio/inspeccion-inicial/inspeccion-inicial.component';
import { PlanillaInspeccionIniComponent } from './estacion-servicio/planilla-inspeccion-ini/planilla-inspeccion-ini.component';
import { DownloadUrlPipe } from './core/download-url.pipe';

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'menuEstacionServicio',
  component: MenuEstacionServicioComponent,
  // canActivate:[AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
  path: 'inspeccionInicial',
  component: InspeccionInicialComponent,
  // canActivate:[AuthGuard]
  },
  {
  path: 'planillaInicial/:razonSocial',
  component: PlanillaInspeccionIniComponent,
  // canActivate:[AuthGuard]
  },
  {
    path: '',
    component: ProfileComponent
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
    PlanillaInspeccionIniComponent,
    DownloadUrlPipe,
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
