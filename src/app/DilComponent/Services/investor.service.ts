import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvestorService {
  private selectedInvestorSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  selectedInvestor$: Observable<string> =
    this.selectedInvestorSubject.asObservable();
  setSelectedInvestor(investorName: string) {
    this.selectedInvestorSubject.next(investorName);
  }

  private selectedInvestorIDSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  public selectedInvestorID$: Observable<number> =
    this.selectedInvestorIDSubject.asObservable();
  setSelectedInvestorID(investorID: number) {
    this.selectedInvestorIDSubject.next(investorID);
  }

  private baseUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/investor-types';

  constructor(private http: HttpClient) {}

  getInvestorTypes(loanID: number): Observable<any[]> {
    console.log('me aya service me');
    const apiUrl = `${this.baseUrl}?loan_type_id=${loanID}`;

    return this.http.get<any[]>(apiUrl);
  }
}
