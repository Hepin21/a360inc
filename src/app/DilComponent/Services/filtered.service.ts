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

  // getDilFilteredData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  getDilFilteredData(
    loanID: number,
    investorID: number,
    clientID: number,
    milestoneID: number
  ): Observable<any> {
    const apiUrl = `${this.baseUrl}?loan_type_id=${loanID}&investor_type_id=${investorID}&client_id=${clientID}&milestone_id=${milestoneID}`;
    return this.http.get<any[]>(apiUrl);
  }
}
// fetchFilteredData(): Observable<any> {
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
