import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientiService } from '../services/clienti.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-inserisci-cliente',
  templateUrl: './inserisci-cliente.component.html',
  styleUrls: ['./inserisci-cliente.component.css']
})
export class InserisciClienteComponent {
openModal(_t14: TemplateRef<any>) {
throw new Error('Method not implemented.');
}



// creo un array di stringhe che contiene i nomi dei campi del form
titoloParent='Inserisci Cliente';
cliente =['id','nome','cognome', 'codicefiscale','age' ,'telefono','email','indirizzo','citta','cap','provincia','stato'];
nazione =['Italia','Francia','Costa D\'Avorio','Germania','Spagna','Portogallo','Svizzera','Austria','Belgio','Olanda','Lussemburgo','Regno Unito',
'Irlanda','Svezia','Danimarca','Finlandia','Norvegia','Grecia','Polonia','Romania',
'Albania','Malta','Cipro','Turchia','Georgia','Armenia','Azerbaigian',
'Kazakistan','Uzbekistan','Tagikistan','Turkmenistan','Afghanistan','Pakistan','India','Nepal',
'Bhutan','Bangladesh','Sri Lanka','Maldive','Cina','Giappone',
];


// creo un oggetto FormGroup che contiene tutti i FormControl
// clienteForm = new FormGroup({
//   id: new FormControl(''),
//   nomeForm: new FormControl(''),
//   cognomeForm: new FormControl(''),
//   codicefiscaleForm: new FormControl(''),
//   ageForm: new FormControl(''),
//   telefonoForm: new FormControl(''),
//   emailForm: new FormControl(''),
//   indirizzoForm: new FormControl(''),
//   cittaForm: new FormControl(''),
//   capForm: new FormControl(''),
//   provinciaForm: new FormControl(''),
//   statoForm: new FormControl(''),
// });
// content: any;

// // creo un metodo che invia i dati al form e li stampa in console
// inviaDati(){
//   const datiCliente = this.clienteForm.value;

//   const cliente ={
//     id: datiCliente.id,
//     nome: datiCliente.nomeForm,
//     cognome: datiCliente.cognomeForm,
//     codicefiscale: datiCliente.codicefiscaleForm,
//     age: Number(datiCliente.ageForm!),
//     telefono: Number (datiCliente.telefonoForm!),
//     email: datiCliente.emailForm,
//     indirizzo: datiCliente.indirizzoForm,
//     citta: datiCliente.cittaForm,
//     cap: datiCliente.capForm,
//     provincia: datiCliente.provinciaForm,
//     stato: datiCliente.statoForm,
//   };
//   console.log(cliente);
//   }
//   onSubmit(form: NgForm) {
//     if (form.valid) {
//       console.log(form.value);
//     }
//   }

//   // creo un metodo che resetta i campi del form
//   resettaCampi(){
//     this.clienteForm.reset();
//   }

//   // creo un metodo che stampa in console il valore di un campo del form
//   stampaValoreCampo(){
//     console.log(this.clienteForm.get('nomeForm')?.value);
//     console.log(this.clienteForm.get('cognomeForm')?.value);
//     console.log(this.clienteForm.get('codicefiscaleForm')?.value);
//     console.log(this.clienteForm.get('ageForm')?.value);
//     console.log(this.clienteForm.get('telefonoForm')?.value);
//     console.log(this.clienteForm.get('emailForm')?.value);
//     console.log(this.clienteForm.get('indirizzoForm')?.value);
//     console.log(this.clienteForm.get('cittaForm')?.value);
//     console.log(this.clienteForm.get('capForm')?.value);
//     console.log(this.clienteForm.get('provinciaForm')?.value);
//     console.log(this.clienteForm.get('statoForm')?.value);
//     console.log(this.clienteForm.get('id')?.value);
//     console.log(this.clienteForm.get('age')?.value);
//   }

//   /creo un metodo che stampa in console il valore di tutti i campi del form
//   stampaValoriCampi(){
//     console.log(this.clienteForm.value);
//   }

//   submitForm() {
//     console.log(this.clienteForm.value);
//     }
//  */

 /* clienteForm: FormGroup | any;


    ngOnInit(): void {
      this.clienteForm = new FormGroup({
      nome : new FormControl(null, { validators: [Validators.required] }),
      cognome : new FormControl(null, { validators: [Validators.required] }),
      codicefiscale : new FormControl(null, { validators: [Validators.required] }),
      age : new FormControl(null, { validators: [Validators.required] }),
      telefono : new FormControl(null, { validators: [Validators.required] }),
      email : new FormControl(null, { validators: [Validators.required] }),
      indirizzo : new FormControl(null, { validators: [Validators.required] }),
      citta : new FormControl(null, { validators: [Validators.required] }),
      cap : new FormControl(null, { validators: [Validators.required] }),
      provincia : new FormControl(null, { validators: [Validators.required] }),
      stato : new FormControl(null, { validators: [Validators.required] }),

      });
    }

    clienteInserito: any = null;
    content : any;

   constructor(private clienteSvc:ClientiService,private modalSvc: NgbModal) { }

    onSubmit(modal: any ) {
      if (this.clienteForm.valid) {
        const clienteData = {
          nome: this.clienteForm.value.nome,
          cognome: this.clienteForm.value.cognome,
          codicefiscale: this.clienteForm.value.codicefiscale,
          age: this.clienteForm.value.age,
          telefono: this.clienteForm.value.telefono,
          email: this.clienteForm.value.email,
          indirizzo: this.clienteForm.value.indirizzo,
          citta: this.clienteForm.value.citta,
          cap: this.clienteForm.value.cap,
          provincia: this.clienteForm.value.provincia,
          stato: this.clienteForm.value.stato,

        };
        this.clienteSvc.save(clienteData).subscribe({
          next: (response: any) => {
            this.clienteInserito = response;
            this.modalSvc.open(modal);
          }

        });
        console.log(this.clienteForm.value);
      }
    }

    resettaCampi(){
      this.clienteForm.reset();
    }

    stampaValoreCampo(){
      console.log(this.clienteForm.get('nome')?.value);
      console.log(this.clienteForm.get('cognome')?.value);
      console.log(this.clienteForm.get('codicefiscale')?.value);
      console.log(this.clienteForm.get('age')?.value);
      console.log(this.clienteForm.get('telefono')?.value);
      console.log(this.clienteForm.get('email')?.value);
      console.log(this.clienteForm.get('indirizzo')?.value);
      console.log(this.clienteForm.get('citta')?.value);
      console.log(this.clienteForm.get('cap')?.value);
      console.log(this.clienteForm.get('provincia')?.value);
      console.log(this.clienteForm.get('stato')?.value);
    } */

  clienteForm= new FormGroup({
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
    nazioneForm: new FormControl(''),
  });

  clienteInserito: any = null;

  constructor(private clienteSvc: ClientiService, private modalSvc: NgbModal) {}

  inviaDati(modal: any) {
    const datiCliente = this.clienteForm.value;

    const cliente: Cliente = {
      nome: datiCliente.nomeForm!,
      cognome: datiCliente.cognomeForm!,
      codicefiscale: datiCliente.codicefiscaleForm!,
      age: Number(datiCliente.ageForm!),
      telefono: datiCliente.telefonoForm!,
      email: datiCliente.emailForm!,
      indirizzo: datiCliente.indirizzoForm!,
      citta: datiCliente.cittaForm!,
      cap: datiCliente.capForm!,
      provincia: datiCliente.provinciaForm!,
      id: 0,
      note: '',
      data: ''
    };

    this.clienteSvc.save(cliente).subscribe({
      next: (response) => {
        this.clienteInserito = response;
        this.modalSvc.open(modal);
      },
      error: (err) => alert(err.error.message),
    });
  }

  resettaCampi() {
    this.clienteForm.reset();
  }
}

