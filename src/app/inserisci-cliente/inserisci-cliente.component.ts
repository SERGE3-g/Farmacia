import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inserisci-cliente',
  templateUrl: './inserisci-cliente.component.html',
  styleUrls: ['./inserisci-cliente.component.css']
})
export class InserisciClienteComponent {
// creo un array di stringhe che contiene i nomi dei campi del form
titoloParent='Inserisci Cliente';
cliente =['id','nome','cognome', 'codicefiscale','age' ,'telefono','email','indirizzo','citta','cap','provincia','stato'];

// creo un oggetto FormGroup che contiene tutti i FormControl
clienteForm = new FormGroup({
  id: new FormControl(''),
  nomeForm: new FormControl(''),
  cognomeForm: new FormControl(''),
  codicefiscaleForm: new FormControl(''),
  ageForm: new FormControl(''),
  telefonoForm: new FormControl(''),
  emailForm: new FormControl(''),
  indirizzoForm: new FormControl(''),
  cittaForm: new FormControl(''),
  capForm: new FormControl(''),
  provinciaForm: new FormControl(''),
  statoForm: new FormControl(''),
});
content: any;

// creo un metodo che invia i dati al form e li stampa in console
inviaDati(){
  const datiCliente = this.clienteForm.value;

  const cliente ={
    id: datiCliente.id,
    nome: datiCliente.nomeForm,
    cognome: datiCliente.cognomeForm,
    codicefiscale: datiCliente.codicefiscaleForm,
    age: datiCliente.ageForm,
    telefono: datiCliente.telefonoForm,
    email: datiCliente.emailForm,
    indirizzo: datiCliente.indirizzoForm,
    citta: datiCliente.cittaForm,
    cap: datiCliente.capForm,
    provincia: datiCliente.provinciaForm,
    stato: datiCliente.statoForm,
  };
  console.log(cliente);
  }
}

