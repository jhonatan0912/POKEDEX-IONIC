import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../../services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  offset = 0;
  pokemonList: any = [];

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
