import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';
import { Component, Injectable } from '@angular/core';

@Injectable()
export class StatisticsSender {
  @Inject(Http) private http: Http;
  url: string;
  authToken: string;

  constructor() {
    this.url = "http://localhost:8088/services/collector/event";
    this.authToken = "Splunk B6438D3D-879C-4904-83EF-DF0FE70EF245";
  }

  public sendData(data: string): void{
    console.log('Statistics sender invoked send with data:', data)
  }

  private send(dataToSend: string){
var data = { event: dataToSend };
const body = JSON.stringify(data);
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authToken);
      headers.append("Accept", 'application/json');
      this.http.post(this.url, body, { headers: headers });
    }

}
