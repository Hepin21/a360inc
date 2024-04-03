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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoZXBpbnBvbmtpeWFAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOiJ1c2VyIiwibmFtZSI6IkhlcGluIFBvbmtpeWEiLCJpZCI6NywiZXhwIjoxNzEyMTYzMTQ4fQ.p1KazSOF5fHs3vsA_yYL6noEZcqSwRAo6ebqfLjn7wc';

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
