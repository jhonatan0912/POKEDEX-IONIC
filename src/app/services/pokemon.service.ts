import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = 'https://pokeapi.co/api/v2';
  // imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
  imageUrl ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"

  constructor(public http: HttpClient) { }

  getPokemon(offset: number = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=10`).pipe(
      map((result: any) => {
        return result['results'];
      }),
      map((pokemons: any) => {
        return pokemons.map((pokemon: any, index: number) => {
          pokemon.image = this.getImage(index + offset + 1);
          pokemon.pokeIndex = offset + index + 1;
          return this.http.get(pokemon.url).pipe( // Realiza una petición HTTP a la URL del pokemon
            map((pokemonDetails: any) => {
              pokemon.types = pokemonDetails.types; // Asigna el valor del campo 'types' del pokemonDetails al pokemon
              pokemon.background = pokemonDetails.types[0].type.name; // Asigna el valor del campo 'types' del pokemonDetails al pokemon
              return pokemon;
            })
          );
        });
      }),
      switchMap((pokemonObservables: Observable<any>[]) => {
        return forkJoin(pokemonObservables); // Combina las observables de los pokemons en una sola observable
      })
    );
  }

  getImage(index: number) {
    return `${this.imageUrl}${index}.png`;
  }

  getPokemonDetails(index: number) {
    return this.http.get(`${this.baseUrl}/pokemon/${index}`)
  }
}