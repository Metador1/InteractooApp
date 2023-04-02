import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';


const appRoutes:Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'menu', component: MenuPrincipalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegistroComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
