import { Component } from '@angular/core';
import { StatisticsSender }  from './StatisticsSender';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>`,
})
export class AppComponent  { name = 'Angular';
constructor(private statisticsSender: StatisticsSender) { }
}
