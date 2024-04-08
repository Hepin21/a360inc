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
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, tap } from 'rxjs';
// import { ApiService } from './api.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   // private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
//   // private readonly TOKEN_NAME = 'profanis_auth';
//   // isLoggedIn$ = this._isLoggedIn$.asObservable();

//   // get token(): any {
//   //   return localStorage.getItem(this.TOKEN_NAME);
//   // }

//   // constructor(private apiService: ApiService) {
//   //   this._isLoggedIn$.next(!!this.token);
//   // }

//   // login(username: string, password: string) {
//   //   return this.apiService.login(username, password).pipe(
//   //     tap((response: any) => {
//   //       this._isLoggedIn$.next(true);
//   //       localStorage.setItem(this.TOKEN_NAME, response.token);
//   //     })
//   //   );
//   // }
//   constructor(private http: HttpClient) {}

//   // register(
//   //   c_password: string,
//   //   email: string,
//   //   password: string
//   // ): void {
//   //   const registeredUsers = JSON.parse(
//   //     localStorage.getItem('registeredUsers') || '[]'
//   //   );
//   //   const newUser = {
//   //     email,
//   //     password,
//   //     c_password,

//   //     timestamp: new Date(),
//   //   };
//   //   registeredUsers.push(newUser);
//   //   localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
//   //   // console.log('Registration successful:', firstName);
//   //   console.log('Registration successful:', email);
//   // }
//   // getRegisteredUsers(): any[] {
//   //   return JSON.parse(localStorage.getItem('registeredUsers') || '[]');
//   // }

//   login(username: string, password: string) {
//     const formData = new FormData();
//     // Append username and password to the FormData object
//     formData.append('username', username);
//     formData.append('password', password);

//     // Set up headers if needed (depends on server requirements)
//     const headers = new HttpHeaders();
//     // Adjust the API URL and request body structure based on your server's requirements
//     // return this.http.post<any>('https://beta-feeschedule.outamationlabs.com/api/token', { username, password });
//     return this.http.post<any>('https://beta-feeschedule.outamationlabs.com/api/token',formData, { headers });
//   }
//   // login(email: string, password: string): boolean | string {
//   //   const registeredUsers = this.getRegisteredUsers();
//   //   console.log('Registered Users:', registeredUsers);

//   //   const normalizedEmail = email.toLowerCase();
//   //   const user = registeredUsers.find(
//   //     (u) => u.email.toLowerCase() === normalizedEmail
//   //   );
//   //   if (!user) {
//   //     return 'Email not found';
//   //   }
//   //   if (user.password !== password) {
//   //     return 'Password incorrect';
//   //   }
//   //   return true;
//   // }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
  
//   constructor(private http: HttpClient) {}

//   login(username: string, password: string) {
//     // Create a new FormData object
//     const formData = new FormData();
//     // Append username and password to the FormData object
//     formData.append('username', username);
//     formData.append('password', password);

//     // Set up headers if needed (depends on server requirements)
//     const headers = new HttpHeaders();

//     // Make the HTTP POST request using FormData
//     return this.http.post<any>('https://beta-feeschedule.outamationlabs.com/api/token', formData, { headers });
//   }
//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }
// }
