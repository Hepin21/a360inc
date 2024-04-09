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
  public selectedInvestorId$: Observable<number> =
    this.selectedInvestorIDSubject.asObservable();
  setSelectedInvestorId(investorID: number) {
    this.selectedInvestorIDSubject.next(investorID);
  }
  
  private baseUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/foreclosure/investor-types';

  constructor(private http: HttpClient) {}

  getInvestorTypes(stateID: number, foreclosureTypeId: number, loanID:number): Observable<any[]> {
    const apiUrl = `${this.baseUrl}?state_id=${stateID}&foreclosure_type_id=${foreclosureTypeId}&loan_type_id=${loanID}`;
    return this.http.get<any[]>(apiUrl);
  }
}
