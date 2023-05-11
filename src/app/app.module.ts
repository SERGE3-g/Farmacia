import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DoveInfoComponent } from './dove-info/dove-info.component';
import { CompTitleComponent } from './comp-title/comp-title.component';
import { InserisciClienteComponent } from './inserisci-cliente/inserisci-cliente.component';
import { CercaClienteComponent } from './cerca-cliente/cerca-cliente.component';
import { VisualizzaClienteComponent } from './visualizza-cliente/visualizza-cliente.component';
import { InserisciPrescrizioneComponent } from './inserisci-prescrizione/inserisci-prescrizione.component';
import { CercaPrescrizioneComponent } from './cerca-prescrizione/cerca-prescrizione.component';
import { VisualizzaPrescrizioneComponent } from './visualizza-prescrizione/visualizza-prescrizione.component';
import { VisualizzaProdottoComponent } from './visualizza-prodotto/visualizza-prodotto.component';
import { InserisciProdottoComponent } from './inserisci-prodotto/inserisci-prodotto.component';
import { CercaProdottoComponent } from './cerca-prodotto/cerca-prodotto.component';
import { CercaProdottoVendutoComponent } from './cerca-prodotto-venduto/cerca-prodotto-venduto.component';
import { VisualizzaProdottoVendutoComponent } from './visualizza-prodotto-venduto/visualizza-prodotto-venduto.component';
import { InserisciProdottoVendutoComponent } from './inserisci-prodotto-venduto/inserisci-prodotto-venduto.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './about/form/form.component';
import { CalcolatriceComponent } from './calcolatrice/calcolatrice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChiSiamoComponent,
    ContattiComponent,
    DoveInfoComponent,
    CompTitleComponent,
    InserisciClienteComponent,
    CercaClienteComponent,
    VisualizzaClienteComponent,
    InserisciPrescrizioneComponent,
    CercaPrescrizioneComponent,
    VisualizzaPrescrizioneComponent,
    VisualizzaProdottoComponent,
    InserisciProdottoComponent,
    CercaProdottoComponent,
    CercaProdottoVendutoComponent,
    VisualizzaProdottoVendutoComponent,
    InserisciProdottoVendutoComponent,
    AboutComponent,
    FormComponent,
    CalcolatriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
