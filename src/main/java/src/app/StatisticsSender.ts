import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Inject } from '@angular/core';
import { Component, Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class StatisticsSender {
  http: Http;
  datePipe: DatePipe;
  url: string;
  authToken: string;
  dateTimeFormat: string;
  timeZoneFormat: string;
  private data: string;

  constructor(http: Http) {
console.log('in sender constructor');
    this.http = http;
    this.datePipe = new DatePipe;
    this.url = "http://localhost:8088/services/collector/event";
    this.authToken = "Splunk B6438D3D-879C-4904-83EF-DF0FE70EF245";
    this.dateTimeFormat = 'dd/MMM/y:HH:mm:ss';
    this.timeZoneFormat = 'Z';
  }

  public sendData(incomingData: string): void{
      let data = this.getStatisticsResultString(incomingData);
      this.send(data);
  }

  private getStatisticsResultString(incomingData: string):string {
    let result: string;
    let time = this.concatenateDate();
    result = '0.0.0.0 '+incomingData+' - ['+time+'] \"GET '+this.getCurrentUrl()+' HTTP/1.1" 200 1 \"'+this.getReferrerUrl()+'\" \"'+this.getUserAgent()+'\"';
    return result;
  }

  private concatenateDate(): string{
        let date = Date.now();
        let result = this.datePipe.transform(date, this.dateTimeFormat);
        let timeZone = this.datePipe.transform(date, this.timeZoneFormat);
        timeZone = timeZone.substring(3);
        if (timeZone.length>2){
          timeZone = timeZone+'00';
        } else {
          let sign = timeZone.substring(0,1);
          timeZone = timeZone.substring(1);
          timeZone = sign+'0'+timeZone+'00';
        }
        let resultString: string = result+' '+timeZone;
        return resultString;
  }

  private getHostUrl(): string {
    return location.host;
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
      console.log('In send method of sender');
      console.log('sending with: '+this.http);
      var data = { event: dataToSend };
      console.log(data);
      const body = JSON.stringify(data);
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authToken);
      headers.append('Access-Control-Allow-Origin', '*');
        const req = this.http.post(this.url, body, { headers: headers });
        req.subscribe();
    }

}
