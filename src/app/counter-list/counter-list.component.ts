import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})

export class CounterListComponent implements OnInit {

  counters: Counter[] = [];
  name: string = 'Counter Wall';
  numberOfCounters: number = 0;

    constructor() {}

  ngOnInit(): void {}
  create(): void {
    if (this.numberOfCounters < 6) {
    this.counters.push(new Counter());
    this.numberOfCounters += 1;
    } else {
      
    }
  }
  
}
