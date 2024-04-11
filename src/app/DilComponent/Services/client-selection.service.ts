import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientSelectionService {
  private selectedClient: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  selectedClient$: Observable<string> = this.selectedClient.asObservable();
  setSelectedClient(clientName: string) {
    this.selectedClient.next(clientName);
  }

  private selectedClientIDSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  public selectedClientId$: Observable<number> =
    this.selectedClientIDSubject.asObservable();
  setSelectedClientId(clientID: number) {
    this.selectedClientIDSubject.next(clientID);
  }
  private baseUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/clients';

  constructor(private http: HttpClient) {}

  getClientTypes(loanID: number, investorID: number): Observable<any[]> {
    console.log('me aya service me');
    const apiUrl = `${this.baseUrl}?loan_type_id=${loanID}&investor_type_id=${investorID}`;
    return this.http.get<any[]>(apiUrl);
  }
  // fetchInvestorTypes(): Observable<any> {
  //   // Assuming you need to include an authorization token
  //   const token =
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoZXBpbnBvbmtpeWFAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOiJ1c2VyIiwibmFtZSI6IkhlcGluIFBvbmtpeWEiLCJpZCI6NywiZXhwIjoxNzEyMDc5OTI4fQ.SfcOkcbGYdPeOmuURGU4x9lPh54kFb9hLmT-dOWnpfk';

  //   // Set up the headers with the authorization token
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`,
  //   });

  //   // Make the HTTP request with the authorization headers
  //   return this.http.get(this.apiUrl, { headers });
  // }
}
