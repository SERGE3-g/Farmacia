export class Contatto {
  name: string;
  surname: string;
  email: string;
  message: string;

  constructor(name: string, surname: string, email: string, message: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.message = message;
  }
}
