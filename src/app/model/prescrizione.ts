export class Prescrizione {
    id: number;
    nome: string;
    cognome: string;
    dataNascita: string;
    codiceFiscale: string;
    indirizzo: string;
    telefono: string;
    email: string;
    nomeFarmaco: string;
    dosaggio: string;
    dataPrescrizione: string;
    dataScadenza: string;
    note: string;
    idMedico: number;
    idPaziente: number;
    idFarmaco: number;


    constructor(id: number, nome: string, cognome: string, dataNascita: string, codiceFiscale: string, indirizzo: string, telefono: string, email: string, nomeFarmaco: string, dosaggio: string, dataPrescrizione: string, dataScadenza: string, note: string, idMedico: number, idPaziente: number, idFarmaco: number) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.dataNascita = dataNascita;
        this.codiceFiscale = codiceFiscale;
        this.indirizzo = indirizzo;
        this.telefono = telefono;
        this.email = email;
        this.nomeFarmaco = nomeFarmaco;
        this.dosaggio = dosaggio;
        this.dataPrescrizione = dataPrescrizione;
        this.dataScadenza = dataScadenza;
        this.note = note;
        this.idMedico = idMedico;
        this.idPaziente = idPaziente;
        this.idFarmaco = idFarmaco;
    }

}





