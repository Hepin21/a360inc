import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientSelectionService {
  private selectedClient: BehaviorSubject<string> = new BehaviorSubject<string>('');
  selectedClient$: Observable<string> = this.selectedClient.asObservable();
  setSelectedClient(clientName: string) {
    this.selectedClient.next(clientName);
  }
  private apiUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/clients?loan_type_id=1&investor_type_id=1';

  constructor(private http: HttpClient) {}

  getClientTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
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
