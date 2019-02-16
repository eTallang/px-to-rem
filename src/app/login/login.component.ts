import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core';

@Component({
  selector: 'ptr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router, private authService: AuthService) {}

  signIn(): void {
    this.errorMessage = null;
    this.authService.signIn(this.username, this.password).then(
      () => {
        this.router.navigate(['']);
      },
      err => (this.errorMessage = err.message)
    );
  }
}
