import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping List App';
  @Input() loadedFeature: string;

  onNavigate(feature) {
    this.loadedFeature = feature;
  }
}
