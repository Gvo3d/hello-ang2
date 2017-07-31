import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Http } from '@angular/http';
import { MyComponent }  from './MyComponent';
import { AbstractComponent } from './AbstractComponent';
import { StatisticsSender }  from './StatisticsSender';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import {Injector} from '@angular/core';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, MyComponent ],
  providers: [ StatisticsSender, DatePipe, HttpModule ],
  bootstrap:    [ AppComponent, MyComponent ]
})

export class AppModule {
 }
