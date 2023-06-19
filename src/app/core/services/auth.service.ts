import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    this.loggedIn.next(localStorage.getItem('access_token') === 'admin');
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(username: string, password: string): boolean{
    if (username === 'admin' && password === 'admin' ) {
      this.loggedIn.next(true);
      localStorage.setItem('access_token','admin');
      return true;
      // this.router.navigate(['/']);
    }else{
      return false
    }
  }

  logout() {
    localStorage.removeItem('access_token');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}