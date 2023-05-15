import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prodotto } from '../interface/prodotto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  readonly url= 'http://localhost:3000/prodotti';

  constructor(private http: HttpClient ) { }

  save(prodotto:Prodotto):Observable<Prodotto >{
    return this.http.post<Prodotto>(this.url, prodotto);
  }

 findById(prodottoId:number) : Observable < Prodotto >{
    return this.http.get <Prodotto>(`${this.url}/${prodottoId}`);
  }

  findAll(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.url);
  }

}
