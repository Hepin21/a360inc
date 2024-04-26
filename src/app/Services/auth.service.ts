import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<any>('https://beta-feeschedule.outamationlabs.com/api/token', formData)
      .pipe(
        tap(response => {
          // Assuming the token is returned in the response
          const token = response.access_token;
          if (token) {
            // Store the token in local storage
            localStorage.setItem('token', token);
          }
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
