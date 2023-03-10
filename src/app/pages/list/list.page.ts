import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "./../../services/pokemons.service";
import { Pokemon } from 'src/app/models/Pokemon';



@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  pokemon: Pokemon = {
    id: 0,
    name: '',
    image: '',
    types: [{
      slot: 0,
      type: {
        name: '',
        url: ''
      }
    }],
    cssClass: '',
  };

  pokemonsList: Pokemon[] = []

  cssClass: string = ''

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit() {
    this.getPokemons();
  }

  async getPokemons() {
    for (let index = 1; index <= 10; index++) {
      this.pokemonService.getPokemonByIdRequtest(index)
        .subscribe((response: any) => {
          this.pokemon = {
            id: response.id,
            name: response.forms[0].name,
            image: response.sprites.other.dream_world.front_default,
            types: response.types,
            cssClass: response.types[0].type.name
          }
          this.pokemonsList.push(this.pokemon)
          console.log(this.pokemon.types)
        });
    }
  }

}
