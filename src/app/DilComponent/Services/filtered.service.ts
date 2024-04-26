import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilteredService {
  private baseUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/filtered';

  constructor(private http: HttpClient) {}
  getDilFilteredData(
    loanID: number,
    investorID: number,
    clientID: number,
    milestoneID: number
  ): Observable<any> {
    const apiUrl = `${this.baseUrl}?loan_type_id=${loanID}&investor_type_id=${investorID}&client_id=${clientID}&milestone_id=${milestoneID}`;
    return this.http.get<any>(apiUrl);
  }
}
