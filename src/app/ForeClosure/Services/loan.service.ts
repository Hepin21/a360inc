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
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/foreclosure/loan-types?state_id=28&foreclosure_type_id=1';

  constructor(private http: HttpClient) {}

  getLoanTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
