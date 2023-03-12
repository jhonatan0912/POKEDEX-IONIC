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
