import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'jan';
  public age: number = 19;

  get nombreCapitalizado(): string{
    return this.name.toUpperCase();
  }

  getDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Gofren'
  }
  changeAge():void{
    this.age = 30;
  }

  reset():void{
    this.name = 'Jan';
    this.age = 19;

    document.querySelectorAll('h1')!.forEach(element =>{
      element.innerHTML = '<h1>Desde Angular</h1>'
    }

      )
  }
}
