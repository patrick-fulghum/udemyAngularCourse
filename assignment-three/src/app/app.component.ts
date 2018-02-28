import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment Three';
  displayBooks = false;
  logs = [];
  i = 0;
  onToggle() {
    this.displayBooks = this.displayBooks ? false : true;
    this.logs.push(this.i);
    this.i++;
  }
}
