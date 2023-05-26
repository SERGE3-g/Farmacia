export class Cliente {
    id: number;
    nome: string;
    cognome: string;
    codicefiscale: string;
    age: number;
    email: string;
    telefono: number;
    indirizzo: string;
    citta: string;
    cap: string;
    provincia: string;
    note: string;
    data: string;
    constructor(id: number, nome: string, cognome: string, codicefiscale: string, age: number  ,email: string, telefono: number, indirizzo: string, citta: string, cap: string, provincia: string, note: string, data: string) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.codicefiscale = codicefiscale;
        this.age = age;
        this.email = email;
        this.telefono = telefono;
        this.indirizzo = indirizzo;
        this.citta = citta;
        this.cap = cap;
        this.provincia = provincia;
        this.note = note;
        this.data = data;
    }
}




