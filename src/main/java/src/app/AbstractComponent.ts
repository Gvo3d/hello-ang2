import { StatisticsSender }  from './StatisticsSender';
import { Component, Inject } from '@angular/core';
import {OnInit} from "@angular/core";

export abstract class AbstractComponent implements OnInit {
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
        console.log(this.sender);
        this.sender.sendData(this.myIdentity);
    }
}
