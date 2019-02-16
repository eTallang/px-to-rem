import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User> = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) { }

  signIn(username: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.fireAuth.auth.signInWithEmailAndPassword(username, password);
  }

  signOut(): Promise<void> {
    return this.fireAuth.auth.signOut();
  }
}
