import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }
  public characters: Character[] = [{
    id: uuid(),
    nombre: "Krilin",
    poder: 900
  },{
    id: uuid(),
    nombre: "Goku",
    poder: 9500
  },{
    id: uuid(),
    nombre:'Vegeta',
    poder: 7500
  }];


  onNewCharacter(character:Character){
    const newCharacter: Character = {id: uuid(), ...character};
    this.characters.push(newCharacter);
    console.log(newCharacter);
  }
  deleteCharacterById(id:string){
    console.log(id);
    this.characters = this.characters.filter(character => character.id !== id);
  }
  onDeleteCharacter(index:number){
    this.characters.splice(index,1);
  }

}
