import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactFormService } from 'src/app/services/contact-form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 contactForm= new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
 });

  componentClasses= '';

  constructor(
    private fb: FormBuilder,
    private contactFormService: ContactFormService
  ) { }

  ngOnInit(): void {
    this.componentClasses = 'text-center mb-4';
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactFormService.sendFormData(this.contactForm.value).subscribe(
        response => {
          console.log(response);
          alert('Messaggio inviato con successo!');
        },
        error => {
          console.log(error);
          alert('Errore durante l\'invio del messaggio.');
        }
      );
    } else {
      alert('Compila correttamente tutti i campi del modulo.');
    }
  }
}


