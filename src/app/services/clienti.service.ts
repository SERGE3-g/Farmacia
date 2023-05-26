import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {
  [x: string]: any;

  readonly url: string = "http://localhost:3000/clients";


  constructor(private http:HttpClient) { }

  save(cliente:Cliente){
    return this.http.post<Cliente> (this.url, cliente);
  }

  //
 findByID(clienteId:number):Observable<Cliente>{
   return this.http.get<Cliente>(`${this.url}/${clienteId}`);
 }

 findAll():Observable<Array<Cliente>>{
   return this.http.get<Array<Cliente>>(this.url);
 }

  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`, cliente);
  }

  delete(clienteId:number):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.url}/${clienteId}`);
  }

}
