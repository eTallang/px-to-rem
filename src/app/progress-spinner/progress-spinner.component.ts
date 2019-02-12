import { Component, Input, OnChanges } from '@angular/core';

interface Circle {
  delay: number;
  duration: number;
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
      this.addCircle(this.duration),
      this.addCircle(this.duration / 4),
      this.addCircle(this.duration / 2),
      this.addCircle((this.duration / 4) * 3)
    ];
  }

  addCircle(delay: number): Circle {
    return {
      delay: delay,
      duration: this.duration
      // duration: this.duration + (Math.random() * 1000)
    };
  }
}
