import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MyComponent }  from './MyComponent';
import { StatisticsSender }  from './StatisticsSender';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MyComponent ],
  providers: [ StatisticsSender ],
  bootstrap:    [ AppComponent, MyComponent ]
})
export class AppModule { }
