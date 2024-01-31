import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environments';

import {HttpClientModule} from '@angular/common/http'; // CONSULTAS SQL
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FacturasComponent } from './pages/facturas/facturas.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    MenuComponent,
    ClientesComponent,
    FacturasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule //PARA CONSULTAS SQL
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
