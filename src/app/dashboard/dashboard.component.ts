import { Component, OnInit } from '@angular/core';

import { AuthService } from '../core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ptr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pxValue = '16';
  user: Observable<firebase.User>;

  get remValue(): number {
    return +this.pxValue / 16;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.user;
  }
}
