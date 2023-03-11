import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../../services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  offset = 0;
  pokemonList: Pokemon[] = [];

  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokeService.getPokemon(this.offset)
      .subscribe((res: any) => {
        this.pokemonList = res;
      })
  }
}
