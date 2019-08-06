import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataReceived: any;

  emitSelectedRecipe(data) {
    console.log('received in app component ts --');
    this.dataReceived = data;
  }
}
