import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../interaction.service';
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  pokemon;

  async ngOnInit() {
    this._interactionService.message$.subscribe(
      message => {
        this.pokemon = message;
      }
    );
  }
}
