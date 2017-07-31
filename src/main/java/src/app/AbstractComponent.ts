import { StatisticsSender }  from './StatisticsSender';
import { Component, Inject } from '@angular/core';
import { OnInit, OnDestroy } from "@angular/core";

export abstract class AbstractComponent implements OnInit,OnDestroy {
    statisticsSender: StatisticsSender;
    private myIdentity: string;

    constructor(statisticsSender: StatisticsSender, identity: string) {
        this.statisticsSender = statisticsSender;
        this.myIdentity = identity;
    }

    ngOnInit(): void {
        this.statisticsSender.sendData(this.myIdentity);
    }

    ngOnDestroy():void {
    }
}
