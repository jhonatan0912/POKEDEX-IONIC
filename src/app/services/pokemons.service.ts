import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {


  constructor(public http: HttpClient) { }

  getPokemonsRequtest(offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
  }

  getPokemonByIdRequtest(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }
}
