import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() { console.log('construtor called'); }

  ngOnInit() { console.log('ngOnit called'); }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes );
  }
}
