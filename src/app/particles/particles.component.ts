import { Component, ViewChild, ElementRef, AfterViewInit, HostBinding } from '@angular/core';

interface Particle {
  horizontalPosition: number;
}

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements AfterViewInit {
  @HostBinding('style.width') width = '100%';
  @HostBinding('style.height') height = '100%';
  @HostBinding('style.position') position = 'absolute';
  @ViewChild('container') animationContainer: ElementRef<HTMLDivElement>;
  particles: Particle[] = [];
  constructor() { }

  ngAfterViewInit() {
    const viewWidth = this.animationContainer.nativeElement.clientWidth;
    for (let i = 0; i < 40; i++) {
      this.particles.push({
        horizontalPosition: Math.random() * viewWidth
      });
    }
  }

}
