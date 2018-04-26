import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CoreModule} from './core/core.module';

import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import { NavbarComponent } from './ui/navbar/navbar.component';

import { AuthGuard } from './core/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
