import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { SettingsComponent } from './settings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, OverlayModule, FormsModule],
  exports: [SettingsComponent]
})
export class SettingsModule {}
