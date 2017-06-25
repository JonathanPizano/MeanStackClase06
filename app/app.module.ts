//Carga de modulos, componentes, directivas y el componente principal
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { AppComponent }  from './app.component';
import { AutosComponent }  from './components/autos.component';
//Peticiones HTTP y Parseo de Objetos JSON
import { HttpModule,JsonpModule } from '@angular/http';

import { AutosVerComponent }  from './components/autos-ver.component';
import { routing, appRoutingProviders }  from './app.routing';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, routing ],
  declarations: [ AppComponent, AutosComponent,AutosVerComponent ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }