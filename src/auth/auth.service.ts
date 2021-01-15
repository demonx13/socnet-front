import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import {Login, Registration, Token, Verify} from './models';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;

  constructor(private http: HttpClient) { }

  login(model: Login): Observable<Token> {
    return this.http.post<Token>(`${environment.url}/auth/jwt/create/`, model)
      .pipe(
        tap((token: Token) => {
            this.setToken(token.access);
            localStorage.setItem('token', token.access);
          }
        )
      );
  }

  registration(model: Registration): any {
    return this.http.post<any>(`${environment.url}/auth/users/`, model);
  }

  verify(model: Verify): any {
    return this.http.post<any>(`${environment.url}/auth/users/activation/`, model);
  }

  isAuth(): boolean {
    this.setToken(this.getToken());
    return !!this.getToken();
  }

  getToken(): string {
    return localStorage.getItem('token') as string;
  }

  setToken(token: string): void{
    this.token = token;
  }

}
