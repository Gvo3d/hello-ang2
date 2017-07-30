import { StatisticsSender }  from './StatisticsSender';
import { Component, Inject } from '@angular/core';
import { OnInit, OnDestroy } from "@angular/core";

export abstract class AbstractComponent implements OnInit,OnDestroy {
    private sender: StatisticsSender;
    private myIdentity: string;

    constructor(identity: string) {
    this.sender = new StatisticsSender();
        this.myIdentity = identity;
        console.log('Sending data to some method from AbstractComponent:'+this.myIdentity);
    }

    send(dataToSend: string): void{
        this.sender.sendData(dataToSend);
    }

    ngOnInit(): void {
        this.sender.sendData(this.myIdentity);
    }

    ngOnDestroy():void {
      this.sender.sendData(this.myIdentity);
    }
}
