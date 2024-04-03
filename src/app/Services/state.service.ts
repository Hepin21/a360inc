import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private selectedStateSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  public selectedState$: Observable<string> =
    this.selectedStateSubject.asObservable();
  setSelectedState(stateName: string) {
    this.selectedStateSubject.next(stateName);
  }
  private apiUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/foreclosure/states';

  constructor(private http: HttpClient) {}

  getStateTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  // fetchStateTypes(): Observable<any> {
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
