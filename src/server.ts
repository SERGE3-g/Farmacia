const express = require('express');
const mysql = require('mysql');

// Configurazione del database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3892978507Gs',
  database: 'farmacia'
});

// Connessione al database MySQL
connection.connect((error: { stack: string; }) => {
  if (error) {
    console.error('Errore di connessione al database MySQL: ' + error.stack);
    return;
  }
  console.log('Connessione al database MySQL avvenuta con successo!');
});

// Creazione dell'app Express
const app = express();

// Esempio di API per ottenere dati dal database
app.get('/api/dati', (req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; json: (arg0: any) => void; }) => {
  const query = 'SELECT * FROM cliente';
  connection.query(query, (error: { stack: string; }, results: any) => {
    if (error) {
      console.error('Errore durante la query: ' + error.stack);
      res.status(500).send('Errore del server');
      return;
    }
    res.json(results);
  });
});

// Avvio del server
const port = 3000;
app.listen(port, () => {
  console.log('Server in ascolto sulla porta ' + port);
});
