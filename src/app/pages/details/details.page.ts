import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  details: any;
  imgUrl: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"

  constructor(private route: ActivatedRoute, private pokeService: PokemonService) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const { index } = params
    this.pokeService.getPokemonDetails(index)
      .subscribe((details: any) => {
        console.log(details);
        this.details = details;
      })
  }

}
