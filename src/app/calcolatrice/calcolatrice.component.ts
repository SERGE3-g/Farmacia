import { Component } from '@angular/core';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})
export class CalcolatriceComponent {

/*
  // dichiarazione variabili
  num1!: number;
  num2!: number;
  risultato!: number;
  operator!: string;

  // dichiarazione metodi
  somma() {
    this.risultato = this.num1 + this.num2;
  }

  sottrazione() {
    this.risultato = this.num1 - this.num2;
  }

  moltiplicazione() {
    this.risultato = this.num1 * this.num2;
  }

  divisione() {
    this.risultato = this.num1 / this.num2;
  }

  // dichiarazione metodi
  calcola() {
    switch (this.operator) {
      case '+':
        this.somma();
        break;
      case '-':
        this.sottrazione();
        break;
      case '*':
        this.moltiplicazione();
        break;
      case '/':
        this.divisione();
        break;
      default:
        this.risultato = 0;
    }
  }

  // dichiarazione metodi
  reset() {
    this.num1 = 0;
    this.num2 = 0;
    this.risultato = 0;
    this.operator = '';
  }*/

  numero1!: number;
  numero2!: number;
  risultato!: number;

  somma() {
    this.risultato = this.numero1 + this.numero2;
  }

  sottrazione() {
    this.risultato = this.numero1 - this.numero2;
  }

  moltiplicazione() {
    this.risultato = this.numero1 * this.numero2;
  }

  divisione() {
    this.risultato = this.numero1 / this.numero2;
  }

  calcola(operator: string) {
    switch (operator) {
      case '+':
        this.somma();
        break;
      case '-':
        this.sottrazione();
        break;
      case '*':
        this.moltiplicazione();
        break;
      case '/':
        this.divisione();
        break;
      default:
        this.risultato = 0;
    }
  }

 

  reset() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.risultato = 0;
  }


}
