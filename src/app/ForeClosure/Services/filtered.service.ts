import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilteredService {
  private baseUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/foreclosure/filtered';

  constructor(private http: HttpClient) {}

  getFilteredData(
    stateID: number,
    foreclosureTypeId: number,
    loanID: number,
    investorID: number,
    clientID: number,
    milestoneID: number
  ): Observable<any[]> {
    const apiUrl = `${this.baseUrl}?state_id=${stateID}&foreclosure_type_id=${foreclosureTypeId}&loan_type_id=${loanID}&investor_type_id=${investorID}&client_id=${clientID}&milestone_id=${milestoneID}`;
    return this.http.get<any[]>(apiUrl);
  }
}
