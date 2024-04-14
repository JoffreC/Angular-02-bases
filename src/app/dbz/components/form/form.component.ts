import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-character',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character1:Character = {
    nombre: '',
    poder: 0
  }

  emitCharacter(){
    console.log(this.character1);

    if (this.character1.nombre.length === 0) return;

    this.onNewCharacter.emit(this.character1);

    this.character1 = { nombre: '', poder: 0 };
  }

  

}
