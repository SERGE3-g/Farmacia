import { Component } from '@angular/core';
import { About } from './model/about';
import {  Articolo } from './model/articolo';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about:About = new About(1,"assets/image/about.jpg", true);

 articolo:Articolo = new Articolo("Benvenuti in Farmaci, la nostra missione è fornire farmaci di alta qualità per migliorare la salute e il benessere delle persone.",
  "la nostra missione è fornire farmaci di alta qualità per migliorare la salute e il benessere delle persone ",
  "Benvenuti in Farmaci");

// forme di contact

 contatto: string = "+39 38 92 97 8507";


  chiama():void{
    alert("Chiama il numero "+ this.contatto)
  }
}








