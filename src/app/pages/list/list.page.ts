import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "./../../services/pokemons.service";



@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  offset: number = 0;
  pokemonsList: any = []

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemonsRequtest(this.offset)
      .subscribe((response: any) => {
        this.pokemonsList = response.results;
      })
  }

}
