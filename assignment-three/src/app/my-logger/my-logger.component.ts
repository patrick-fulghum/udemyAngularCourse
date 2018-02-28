import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-logger',
  templateUrl: './my-logger.component.html',
  styleUrls: ['./my-logger.component.css']
})
export class MyLoggerComponent implements OnInit {
  i = 0;
  getBGColor() {
    this.i++;
    return this.i > 8 ? 'blue' : 'default';
  }
  getColor() {
    return this.i > 8 ? 'white' : 'defualt';
  }
  constructor() { }

  ngOnInit() {
  }

}
