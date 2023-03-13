import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from './../../services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  offset = 0;
  pokemonList: Pokemon[] = [];

  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    this.loadPokemon();
  }

  /**
   * The function takes in a boolean and an event. If the boolean is true, the offset is increased by 10. Then, the function waits 1.5 seconds before calling the getPokemon function from the pokeService. The getPokemon function returns an array of pokemon. The array is then added to the pokemonList array. If the event is not undefined, the event is completed. If the offset is 100, the infiniteScroll is disabled.
   * @param {boolean} [loadMore=false] - boolean = false, event?: any
   * @param {any} [event] - The event that triggered the function.
   */
  loadPokemon(loadMore: boolean = false, event?: any) {
    if (loadMore) {
      this.offset += 10;
    }

    setTimeout(() => {
      this.pokeService.getPokemon(this.offset)
        .subscribe((res: any) => {
          this.pokemonList = [...this.pokemonList, ...res];
          if (event) {
            event.target.complete();
          }
          if (this.offset === 100) {
            this.infiniteScroll.disabled = true;
          }
        })
    }, 1500);
  }
}
