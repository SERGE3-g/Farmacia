import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-inserisci-cliente',
  templateUrl: './inserisci-cliente.component.html',
  styleUrls: ['./inserisci-cliente.component.css']
})
export class InserisciClienteComponent {
// creo un array di stringhe che contiene i nomi dei campi del form
titoloParent='Inserisci Cliente';
cliente =['id','nome','cognome', 'codicefiscale','age' ,'telefono','email','indirizzo','citta','cap','provincia','stato'];
Nazione =['Italia','Francia','Costa D\'Avorio','Germania','Spagna','Portogallo','Svizzera','Austria','Belgio','Olanda','Lussemburgo','Regno Unito','Irlanda','Svezia','Danimarca','Finlandia','Norvegia','Grecia','Polonia','Romania',
'Albania','Malta','Cipro','Turchia','Georgia','Armenia','Azerbaigian','Kazakistan','Uzbekistan','Tagikistan','Turkmenistan','Afghanistan','Pakistan','India','Nepal','Bhutan','Bangladesh','Sri Lanka','Maldive','Cina','Giappone',
];
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
    age: Number(datiCliente.ageForm ),
    telefono: Number (datiCliente.telefonoForm),
    email: datiCliente.emailForm,
    indirizzo: datiCliente.indirizzoForm,
    citta: datiCliente.cittaForm,
    cap: datiCliente.capForm,
    provincia: datiCliente.provinciaForm,
    stato: datiCliente.statoForm,
  };
  console.log(cliente);
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }

  // creo un metodo che resetta i campi del form
  resettaCampi(){
    this.clienteForm.reset();
  }

  // creo un metodo che stampa in console il valore di un campo del form
  stampaValoreCampo(){
    console.log(this.clienteForm.get('nomeForm')?.value);
    console.log(this.clienteForm.get('cognomeForm')?.value);
    console.log(this.clienteForm.get('codicefiscaleForm')?.value);
    console.log(this.clienteForm.get('ageForm')?.value);
    console.log(this.clienteForm.get('telefonoForm')?.value);
    console.log(this.clienteForm.get('emailForm')?.value);
    console.log(this.clienteForm.get('indirizzoForm')?.value);
    console.log(this.clienteForm.get('cittaForm')?.value);
    console.log(this.clienteForm.get('capForm')?.value);
    console.log(this.clienteForm.get('provinciaForm')?.value);
    console.log(this.clienteForm.get('statoForm')?.value);
    console.log(this.clienteForm.get('id')?.value);
    console.log(this.clienteForm.get('age')?.value);
  }

  // creo un metodo che stampa in console il valore di tutti i campi del form
  stampaValoriCampi(){
    console.log(this.clienteForm.value);
  }

}

