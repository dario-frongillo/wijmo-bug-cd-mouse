import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wijmodemo';
  value = 1;
  cd() {
    console.log('run change detection');
  }
}
