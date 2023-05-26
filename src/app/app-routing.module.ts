import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContattiComponent } from './contatti/contatti.component';
import { InserisciClienteComponent } from './inserisci-cliente/inserisci-cliente.component';
import { VisualizzaClienteComponent } from './visualizza-cliente/visualizza-cliente.component';
import { CercaClienteComponent } from './cerca-cliente/cerca-cliente.component';
import { InserisciPrescrizioneComponent } from './inserisci-prescrizione/inserisci-prescrizione.component';
import { VisualizzaPrescrizioneComponent } from './visualizza-prescrizione/visualizza-prescrizione.component';
import { CercaPrescrizioneComponent } from './cerca-prescrizione/cerca-prescrizione.component';
import { InserisciProdottoComponent } from './inserisci-prodotto/inserisci-prodotto.component';
import { VisualizzaProdottoComponent } from './visualizza-prodotto/visualizza-prodotto.component';
import { CercaProdottoComponent } from './cerca-prodotto/cerca-prodotto.component';
import { InserisciProdottoVendutoComponent } from './inserisci-prodotto-venduto/inserisci-prodotto-venduto.component';
import { VisualizzaProdottoVendutoComponent } from './visualizza-prodotto-venduto/visualizza-prodotto-venduto.component';
import { CercaProdottoVendutoComponent } from './cerca-prodotto-venduto/cerca-prodotto-venduto.component';
import { DoveInfoComponent } from './dove-info/dove-info.component';
import { CalcolatriceComponent } from './calcolatrice/calcolatrice.component';
import { FarmaciaComunaleComponent } from './farmacia-comunale/farmacia-comunale.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contatti',component: ContattiComponent},
  {path:'dove-info',component:DoveInfoComponent},
  {path:'calcolatrice',component:CalcolatriceComponent},
  {path:'inserisci-cliente',component:InserisciClienteComponent},
  {path:'visualizza-cliente',component:VisualizzaClienteComponent},
  {path:'cerca-cliente',component:CercaClienteComponent},
  {path:'inserisci-prescrizione',component:InserisciPrescrizioneComponent},
  {path:'visualizza-prescrizione',component:VisualizzaPrescrizioneComponent},
  {path:'cerca-prescrizione',component:CercaPrescrizioneComponent},
  {path:'inserisci-prodotto',component:InserisciProdottoComponent},
  {path:'visualizza-prodotto',component:VisualizzaProdottoComponent},
  {path:'cerca-prodotto',component:CercaProdottoComponent},
  {path:'inserisci-prodotto-venduto',component:InserisciProdottoVendutoComponent},
  {path:'visualizza-prodotto-venduto',component:VisualizzaProdottoVendutoComponent},
  { path: 'cerca-prodotto-venduto', component: CercaProdottoVendutoComponent },
  {path:'farmacia-comunale', component:FarmaciaComunaleComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
