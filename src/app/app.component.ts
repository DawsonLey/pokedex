import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex-project';
  pokemon;
  search;

  constructor(private _interactionService: InteractionService) { }

  getPokemon(event) {
    this.search = event.target.value;
  }

  confirmPokemon() {
    this._interactionService.sendMessage(this.search);
  }
}
