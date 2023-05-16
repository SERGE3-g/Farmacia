import { Injectable } from '@angular/core';
 import * as mysql from 'mysql';
//import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      database: 'Farmacia',
      user: 'root',
      password: '3892978507Gs'
    });
  }

  connect() {
    this.connection.connect((err: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Connected to database');
      }
    });
  }

  disconnect() {
    this.connection.end();
  }

  query(sql: any, values: any) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err: any, results: unknown) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  // provo con firebase

 /* constructor(private firestore: AngularFirestore) { }

  getCollection(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  addDocument(collection: string, data: any) {
    return this.firestore.collection(collection).add(data);
  }

  updateDocument(collection: string, id: string, data: any) {
    return this.firestore.collection(collection).doc(id).update(data);
  }

  deleteDocument(collection: string, id: string) {
    return this.firestore.collection(collection).doc(id).delete();
  } */






}
