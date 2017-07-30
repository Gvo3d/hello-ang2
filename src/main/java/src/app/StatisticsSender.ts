import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';
import { Component, Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class StatisticsSender {
  @Inject(Http) private http: Http;
  url: string;
  authToken: string;
  dateTimeFormat: string;
  timeZoneFormat: string;
  private data: string;

  constructor() {
    this.url = "http://localhost:8088/services/collector/event";
    this.authToken = "Splunk B6438D3D-879C-4904-83EF-DF0FE70EF245";
    this.dateTimeFormat = 'dd/MMM/y:HH:mm:ss';
    this.timeZoneFormat = 'Z';
  }

  public sendData(data: string): void{
      let time = this.concatenateDate();
      console.log("Host:",this.getHostUrl());
      console.log('Referrer:',this.getReferrerUrl());
      console.log('Url:', this.getCurrentUrl());
      console.log('User agent:', this.getUserAgent());
      console.log('Date:', data, 'Time:',time)
  }

  private concatenateDate(): string{
        let datePipe = new DatePipe();
        let date: Date = Date.now();
        let result = datePipe.transform(date, this.dateTimeFormat);
        let timeZone = datePipe.transform(date, this.timeZoneFormat);
        timeZone = timeZone.substring(3);
        if (timeZone.length>2){
          timeZone = timeZone+'00';
        } else {
          let sign = timeZone.substring(0,1);
          timeZone = timeZone.substring(1);
          timeZone = sign+'0'+timeZone+'00';
        }
        return result+' '+timeZone;
  }

  private getHostUrl(): string {
    return location.origin;
  }

  private getReferrerUrl():string {
    return document.referrer;
  }

  private getCurrentUrl():string {
    return location.href;
  }

  private getUserAgent():string {
    return navigator.userAgent;
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
