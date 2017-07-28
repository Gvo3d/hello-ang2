import { Component } from '@angular/core';
import { AbstractComponent } from './AbstractComponent';
import { StatisticsSender }  from './StatisticsSender';

@Component({
  selector: 'my-component',
  template: `
    <div>Hello my name is {{name}}.
      <button (click)="sayMyName()">Say my name</button>
    </div>
   `
})

export class MyComponent extends AbstractComponent {
  name: string;
  constructor() {
    super('Max');
    this.name = 'Max';
  }

  getId(){
      return this.name;
  };

  sayMyName() {
    console.log('My name is', this.name)
  }

}

