import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;
  publicUser: String = '';
  // public apiUrl: string = 'https://next.json-generator.com/api/json/get/4kOt_ewou'
  public apiUrl: string = '/EulenPRL/rest/autentication'

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username, password) {
    const payload = {
      'user': username,
      'pass': password
    }
    return this.http.post<any>(`${this.apiUrl}`, { ...payload })
      .pipe(map(user => {
        // store user details and jwt token in session storage to keep user logged in between page refreshes
        sessionStorage.setItem('session', JSON.stringify(user.map));
        this.userSubject.next(user.map);
        return user.map;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    sessionStorage.removeItem('session');
    this.userSubject.next(null);
    this.router.navigate(['/login/']);
  }

  register(user: User) {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }
}
