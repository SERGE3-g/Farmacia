import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ClientiService } from '../services/clienti.service';
import { Cliente } from '../model/cliente';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inserisci-cliente',
  templateUrl: './inserisci-cliente.component.html',
  styleUrls: ['./inserisci-cliente.component.css']
})
export class InserisciClienteComponent  {


  // creo un array di stringhe che contiene i nomi dei campi del form
  titoloParent = 'Inserisci Cliente';
  //cliente = ['id', 'nome', 'cognome', 'codicefiscale', 'age', 'telefono', 'email', 'indirizzo', 'citta', 'cap', 'provincia', 'stato'];
  nazione = ['Italia', 'Francia', 'Costa D\'Avorio', 'Germania', 'Spagna', 'Portogallo', 'Svizzera', 'Austria', 'Belgio', 'Olanda', 'Lussemburgo', 'Regno Unito',
    'Irlanda', 'Svezia', 'Danimarca', 'Finlandia', 'Norvegia', 'Grecia', 'Polonia', 'Romania',
    'Albania', 'Malta', 'Cipro', 'Turchia', 'Georgia', 'Armenia', 'Azerbaigian',
    'Kazakistan', 'Uzbekistan', 'Tagikistan', 'Turkmenistan', 'Afghanistan', 'Pakistan', 'India', 'Nepal',
   'Bangladesh','Maldive', 'Cina', 'Giappone',
  ]; 
  
  cliente = {
    nome: '',
    cognome: '',
    dataNascita: '',
    luogoNascita: '',
    codiceFiscale: '',
    age: '',
    sesso: '',
    data: '',
    nota: '',
    email: '',
    telefono: '',
    indirizzo: '',
    citta: '',
    provincia: '',
    cap: '',
    nazione: ''
  };



  clienteInserito: any = null;
  constructor(private clientiService: ClientiService ,private  modaleSvc:NgbModal) { }




  /* salvaCliente() {
    this.clientiService.save(this.cliente).subscribe(
      response => {
        console.log(response);
      }
    );
  }   */



  /* inviaDati(modal: any) {
    const datiCliente = this.cliente;

    const cliente: Cliente = {
      nome: datiCliente.nome!,
      cognome: datiCliente.cognome!,
      dataNascita: datiCliente.dataNascita!,
      luogoNascita: datiCliente.luogoNascita!,
      codiceFiscale: datiCliente.codiceFiscale!,
      age: Number(datiCliente.age!),
      sesso: datiCliente.sesso!,
      data: datiCliente.data!,
      nota: datiCliente.nota!,
      email: datiCliente.email!,
      telefono: Number(datiCliente.telefono!),
      indirizzo: datiCliente.indirizzo!,
      citta: datiCliente.citta!,
      provincia: datiCliente.provincia!,
      cap: datiCliente.cap!,
      nazione: datiCliente.nazione!,
    };

    this.clientiService.save(cliente).subscribe({
      next: (result) => {
        this.clienteInserito = result;
        this.modaleSvc.open(modal);
      },
      error: (error) => console.log(error),
    });
   } */
  }

