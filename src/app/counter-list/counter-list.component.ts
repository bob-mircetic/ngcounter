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

    constructor() {}

  ngOnInit(): void {}
  create(): void {
    this.counters.push(new Counter());
  }
  
}
