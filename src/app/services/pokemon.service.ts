import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = 'https://pokeapi.co/api/v2';
  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

  constructor(public http: HttpClient) { }

  getPokemon(offset: number = 0) {
    return this.http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=10`).pipe(
      map((result: any) => {
        return result['results'];
      }),
      map((pokemons: any) => {
        return pokemons.map((pokemon: any, index: number) => {
          pokemon.image = this.getImage(index + offset + 1);
          pokemon.pokeIndex = offset + index + 1;
          return pokemon;
        });
      })
    )
  }

  getImage(index: number) {
    return `${this.imageUrl}${index}.png`;
  }

}
