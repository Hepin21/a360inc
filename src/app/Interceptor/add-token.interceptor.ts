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
import { AuthService } from '../Services/auth.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Get the token from AuthService
    const token = this.authService.getToken();
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoZXBpbnBvbmtpeWFAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOiJ1c2VyIiwibmFtZSI6IkhlcGluIFBvbmtpeWEiLCJpZCI6NywiZXhwIjoxNzEyNjgzNzUzfQ.rm2esWBEHUv6nBSewxMN7zxpXs51rYsetmP1eRAqbEU';

    // Clone the request and set the authorization header if token exists
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // console.log('Request intercepted');
    return next.handle(request).pipe(retry(0), catchError(this.errorHandle)); //* retry(1) Pop Up 2 times
  }

  errorHandle(error: HttpErrorResponse): Observable<never> {
    window.alert(error.message);
    return throwError(() => error.message || 'Server Error');
  }
}

