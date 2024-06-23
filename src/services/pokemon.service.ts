import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiServer } from '../app/apiServer';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http= inject(HttpClient)
  public apiURL= apiServer.apiUrl;
  constructor() {

   }

   getPokemon(){
    return this.http.get(`${this.apiURL}`);
   }


   


}
