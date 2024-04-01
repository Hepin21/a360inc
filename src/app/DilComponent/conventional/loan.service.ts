import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private selectedLoanSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  selectedLoan$: Observable<string> = this.selectedLoanSubject.asObservable();
  // constructor() { }
  setSelectedLoan(loanName: string) {
    this.selectedLoanSubject.next(loanName);
  }
  private apiUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/loan-types';

  constructor(private http: HttpClient) {}

  getLoanTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  fetchLoanTypes(): Observable<any> {
    // Assuming you need to include an authorization token
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoZXBpbnBvbmtpeWFAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOiJ1c2VyIiwibmFtZSI6IkhlcGluIFBvbmtpeWEiLCJpZCI6NywiZXhwIjoxNzExOTk1NTM4fQ.UeKE8vAEzm7fMs-834JcUlN5u9NsflsOa8KtE5TsR-I';

    // Set up the headers with the authorization token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Make the HTTP request with the authorization headers
    return this.http.get(this.apiUrl, { headers });
  }
}
