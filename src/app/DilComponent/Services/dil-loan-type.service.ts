import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DilLoanTypeService {
  private selectedDilLoanSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  selectedLoan$: Observable<string> = this.selectedDilLoanSubject.asObservable();
  // constructor() { }
  setSelectedDilLoan(loanName: string) {
    this.selectedDilLoanSubject.next(loanName);
  }
  private apiUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/loan-types';

  constructor(private http: HttpClient) {}

  getDilLoanTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
