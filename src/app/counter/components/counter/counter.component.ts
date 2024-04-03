import { Component } from "@angular/core";

@Component(
  {
    selector: 'app-counter',
    template: `
      <h2>{{num}}</h2>
      <button (click)="increaseBy(+1)">+1</button>
      <button (click)="reset()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>
    `
  }
)
export class CounterComponent{
  public num: number = 20;

  increaseBy(value: number){
      this.num += value;
  }
  reset(){
    this.num = 20;
  }
}
