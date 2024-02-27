import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private selectedLoanSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  selectedLoan$: Observable<string> = this.selectedLoanSubject.asObservable();
    constructor() { }
    setSelectedLoan(loanName: string) {
      this.selectedLoanSubject.next(loanName);
    }
}
