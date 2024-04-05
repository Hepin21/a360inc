import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoZXBpbnBvbmtpeWFAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOiJ1c2VyIiwibmFtZSI6IkhlcGluIFBvbmtpeWEiLCJpZCI6NywiZXhwIjoxNzEyMzM2OTY3fQ._V3LJvaGEekitFjkmwlk6TvC3zoYZ1oPxy2OICWDv7c';

    // Clone the request and set the authorization header
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Request intercepted');
    return next.handle(request).pipe(retry(0), catchError(this.errorHandle)); //* retry(1) Pop Up 2 times
  }

  errorHandle(error: HttpErrorResponse): Observable<never> {
    window.alert(error.message);
    return throwError(() => error.message || 'Server Error');
  }
}

// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { AuthService } from '../Services/auth.service'; 

// @Injectable()
// export class AddTokenInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(
//     request: HttpRequest<unknown>,
//     next: HttpHandler
//   ): Observable<HttpEvent<unknown>> {
//     // Get the token from AuthService
//     const token = this.authService.getToken();

//     // Clone the request and set the authorization header if the request URL is the token endpoint
//     if (request.url === 'https://beta-feeschedule.outamationlabs.com/api/token') {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//     }

//     console.log('Request intercepted');
//     return next.handle(request).pipe(
//       catchError(this.errorHandle)
//     );
//   }

//   errorHandle(error: HttpErrorResponse): Observable<never> {
//     window.alert(error.message);
//     return throwError(() => error.message || 'Server Error');
//   }
// }
