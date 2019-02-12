import { Component, Input, OnChanges } from '@angular/core';

interface Circle {
  delay: number;
}

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnChanges {
  @Input() size = 200;
  @Input() duration = 1500;
  circles: Circle[] = [];

  ngOnChanges() {
    this.circles = [
      { delay: this.duration },
      { delay: this.duration / 4 },
      { delay: this.duration / 2 },
      { delay: (this.duration / 4) * 3 },
    ];
  }
}
