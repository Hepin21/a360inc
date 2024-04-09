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
  private selectedStateIdSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  public selectedStateId$: Observable<number> =
    this.selectedStateIdSubject.asObservable();
  setSelectedStateID(stateID: number) {
    this.selectedStateIdSubject.next(stateID);
  }

  private apiUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/foreclosure/states';

  constructor(private http: HttpClient) {}

  getStateTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
