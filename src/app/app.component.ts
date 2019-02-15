import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pxValue = '16';

  get remValue(): number {
    return +this.pxValue / 16;
  }
}
