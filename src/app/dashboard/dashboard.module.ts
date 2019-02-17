import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ParticlesModule } from '../particles/particles.module';
import { InputModule } from '../shared';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ParticlesModule,
    FormsModule,
    InputModule,
    SettingsModule
  ]
})
export class DashboardModule { }
