import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pxValue = '0';

  get remValue(): number {
    if (this.pxValue) {
      return +this.pxValue / 16;
    }
  }
}
