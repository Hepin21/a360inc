import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MilestoneService {
  private selectedMilestoneSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  public selectedMilestone$: Observable<string> =
    this.selectedMilestoneSubject.asObservable();
  setSelectedMilestone(milestoneName: string) {
    this.selectedMilestoneSubject.next(milestoneName);
  }
  private apiUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/foreclosure/milestones?state_id=28&foreclosure_type_id=1&loan_type_id=1&investor_type_id=2&client_id=58';

  constructor(private http: HttpClient) {}

  getMilestoneTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  // fetchMilestoneTypes(): Observable<any> {
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
