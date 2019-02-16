import { Component, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input[ptr-input]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  @HostBinding('class.ptr-input') inputClass = true;
}
