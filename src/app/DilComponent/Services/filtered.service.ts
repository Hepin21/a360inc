import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilteredService {

  private selectedFilteredSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  public selectedFiltered$: Observable<string> =
    this.selectedFilteredSubject.asObservable();
  setSelectedFiltered(filtered: string) {
    this.selectedFilteredSubject.next(filtered);
  }
  private apiUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/filtered?loan_type_id=1&investor_type_id=1&client_id=29&milestone_id=139';

  constructor(private http: HttpClient) {}

  // getDilFilteredData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  getDilFilteredData(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
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
