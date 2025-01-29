import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {}

  login() {
    this.isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true');
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
  resetAuth():void{
       localStorage.removeItem('isAuthenticated');
  }
}