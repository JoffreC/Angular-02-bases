import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  public characters: Character[] = [{
    nombre: "Krilin",
    poder: 900
  },{
    nombre: "Goku",
    poder: 9500
  },{
    nombre:'Vegeta',
    poder: 7500
  }];
}
