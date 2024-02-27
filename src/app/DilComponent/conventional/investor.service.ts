import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {
  private selectedInvestorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  selectedInvestor$: Observable<string> = this.selectedInvestorSubject.asObservable();
    constructor() { }
    setSelectedInvestor(investorName: string) {
      this.selectedInvestorSubject.next(investorName);
    }
}
