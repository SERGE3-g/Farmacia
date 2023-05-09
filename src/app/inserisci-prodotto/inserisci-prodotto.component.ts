import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdottiService } from '../services/prodotti.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Prodotto } from '../model/prodotto';

@Component({
  selector: 'app-inserisci-prodotto',
  templateUrl: './inserisci-prodotto.component.html',
  styleUrls: ['./inserisci-prodotto.component.css']
})
export class InserisciProdottoComponent {
 titoloParent = 'Inserisci Prodotto';
categoria = ['Farmaco', 'Parafarmaco', 'Integratore', 'Antipiretici', 'Antinfiammatori', 'Antivirali',
   'Antiemorragici', 'Antiparassitari', 'Antimicotici', 'Antidiarroici', 'Antiemetici', 'Anticonvulsivanti',
  'Antidepressivi', 'Antipertensivi', 'Antiacidi', 'Antiemorroidali', 'Antitumorali', 'Antiparkinsoniani',
  'Antiallergici', 'Antistaminici', 'Antitussivi', 'Antiacneici', 'Antiacarici', 'Antiparassitari', 'Antifungini',
  'Antibatterici', 'Antivirali', 'Antiprotozoari', 'Antiemetici', 'Antidiarroici', 'Antiemorroidali', 'Antipiretici',
   'Antinfiammatori', 'Antibiotici'];

   prodottoForm= new FormGroup({
    nomeForm: new FormControl(''),
    categoriaForm: new FormControl(''),
    prezzoForm: new FormControl(''),
    quantitaForm: new FormControl(''),
    descrizioneForm: new FormControl(''),
    immagineForm: new FormControl(''),
  });

  prodottoInserito: any= null;

  constructor(private prodottoSvc:ProdottiService, private modaleSvc:NgbModal) { }

  inviaDati(modal:any) {
    const datiprodotto = this.prodottoForm.value;

    const prodotto: Prodotto = {
      nome: datiprodotto.nomeForm!,
      categoria: datiprodotto.categoriaForm!,
      prezzo: Number(datiprodotto.prezzoForm!),
      quantita: Number(datiprodotto.quantitaForm!),
      descrizione: datiprodotto.descrizioneForm!,
      immagine: datiprodotto.immagineForm!,
    };

    this.prodottoSvc.save(prodotto).subscribe({
      next: (result) => {
        this.prodottoInserito = result;
        this.modaleSvc.open(modal);
      },
      error: (error) => console.log(error),
    });
   }

  onSubmit() {
    this.prodottoInserito = this.prodottoForm.value;
    console.log(this.prodottoInserito);
  }
}
