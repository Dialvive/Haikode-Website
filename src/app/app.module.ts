import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './_components/index/index.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { NosotrosComponent } from './_components/nosotros/nosotros.component';
import { ContactoComponent } from './_components/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SolucionesComponent } from './_components/soluciones/soluciones.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    ContactoComponent,
    SolucionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
