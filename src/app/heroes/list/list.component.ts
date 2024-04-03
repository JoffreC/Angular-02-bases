import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Jan', 'Littar', 'Lox', 'Alek', 'Gronnar'];
  public deletedHero?: string;

  removeLastHero(){
    this.deletedHero = this.heroNames.pop();
  }
}
