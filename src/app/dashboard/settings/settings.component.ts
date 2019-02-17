import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../../core';
import { Settings } from '../../core/config.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ptr-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss', '../shared-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {
  isOpen = false;
  settings: Observable<Settings>;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.settings = this.configService.getRootSize();
  }

  setRootSize(rootSize: number): void {
    this.configService.setRootSize(rootSize);
  }
}
