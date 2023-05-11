import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {

nazione =['Italia','Francia','Germania','Spagna','Inghilterra','Stati Uniti',
'Cina','Giappone','Russia','Brasile','Argentina','Australia','Canada','Messico','India',
'Sudafrica','Egitto','Marocco','Tunisia','Kenya','Tanzania','Etiopia','Nigeria','Senegal',
'Ghana','Camerun','Congo','Madagascar','Mauritius','Seychelles','Nuova Zelanda','Polinesia Francese',
'Thailandia','Cambogia','Vietnam','Indonesia','Filippine','Malesia','Singapore','Myanmar','Laos','Corea del Sud',
'Giordania','Israele','Emirati Arabi Uniti','Qatar','Arabia Saudita','Oman','Kuwait','Bahrein','Iran','Turchia','Grecia',
'Croazia','Portogallo','Svizzera','Austria','Svezia','Norvegia','Danimarca','Finlandia','Olanda','Belgio','Lussemburgo','Irlanda',
'Islanda','Romania','Bulgaria','Ungheria','Repubblica Ceca','Slovacchia','Polonia','Ucraina','Bielorussia','Lituania','Lettonia',
'Estonia','Moldavia','Albania','Montenegro','Serbia','Bosnia ed Erzegovina','Macedonia del Nord','Kosovo','Slovenia','Cipro','Malta',
'Georgia','Armenia','Azerbaigian','Kazakistan','Uzbekistan','Turkmenistan','Tagikistan','Kirghizistan','Tajikistan','Afghanistan',
'Pakistan','Bangladesh','Nepal','Bhutan','Sri Lanka','Maldive','Iran','Iraq','Siria','Libano','Palestina','Yemen','Eritrea','Somalia',
'Libia','Algeria','Mauritania','Guinea','Guinea Bissau','Guinea Equatoriale','Sierra Leone','Liberia','Costa d\'Avorio','Burkina Faso',
'Togo','Benin','Niger','Ciad','Congo','Gabon','Angola','Zambia','Zimbabwe','Uganda','Ruanda','Burundi','Malawi','Mozambico','Swaziland',
'Lesotho','Botswana','Namibia',]

  /*
  title = 'Contatti';
  subtitle = 'Contattaci per ulteriori informazioni';
  email = '';
  message = '';

    contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
    }
  }*/

}
