import { Component, OnInit } from '@angular/core';

import { AuthService, ConfigService } from '../core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ptr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pxValue = '16';
  rootSize = 16;
  user: Observable<firebase.User>;

  get remValue(): number {
    return +this.pxValue / this.rootSize;
  }

  constructor(private authService: AuthService, private configService: ConfigService) {}

  ngOnInit(): void {
    this.user = this.authService.user;
    this.configService.getRootSize().subscribe(settings => {
      this.rootSize = settings.rootSize;
    });
  }

  onSignOut(): void {
    this.authService.signOut();
  }
}
