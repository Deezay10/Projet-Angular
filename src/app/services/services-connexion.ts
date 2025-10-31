import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginResponse {
  code: string;
  message: string;
  data: string;
}

@Injectable({
  providedIn: 'any'
})
export class ServicesConnexion {
  private apiUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, {
      email,
      password
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
