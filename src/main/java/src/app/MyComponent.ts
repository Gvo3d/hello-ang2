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
  constructor(statisticsSender: StatisticsSender) {
    super(statisticsSender, 'MyComponentImplementation');
  }

}

