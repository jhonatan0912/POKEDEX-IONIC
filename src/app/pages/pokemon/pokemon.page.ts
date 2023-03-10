import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from './../../services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {



  constructor(private pokemonsService: PokemonsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /* Getting the params from the URL. */
    const params = this.activatedRoute.snapshot.params;    
  }



}
