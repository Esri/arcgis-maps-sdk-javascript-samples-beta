import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'map-components-angular-sample';
  onViewReady(event: any) {
    console.log('Map View ready', event);
  }
}
