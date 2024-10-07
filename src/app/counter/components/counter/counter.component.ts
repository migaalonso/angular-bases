import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{counter}}</p>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
  `
})

export class CounterComponent {
  counter: number = 10;

  constructor() { }

  increaseBy(num: number): void{
    this.counter += num;
  }
  reset(): void {
    this.counter = 10;
  }
}
