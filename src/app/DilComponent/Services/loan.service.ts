import { HttpClient, HttpHeaders } from '@angular/common/http';
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
}
