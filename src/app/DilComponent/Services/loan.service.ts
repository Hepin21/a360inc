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

  private selectedLoanIdSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  public selectedLoanId$: Observable<number> =
    this.selectedLoanIdSubject.asObservable();
  setSelectedLoanId(loanID: number) {
    this.selectedLoanIdSubject.next(loanID);
  }

  private apiUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/loan-types';

  constructor(private http: HttpClient) {}

  getLoanTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
