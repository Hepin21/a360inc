import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForeclosuretypeService {
  private selectedForeclosuretypeSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  selectedForeclosuretype$: Observable<string> =
    this.selectedForeclosuretypeSubject.asObservable();
  setSelectedForeclosuretype(foreclosuretypeName: string) {
    this.selectedForeclosuretypeSubject.next(foreclosuretypeName);
  }
  private selectedForeclosuretypeIdSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  public selectedForeclosuretypeID$: Observable<number> =
    this.selectedForeclosuretypeIdSubject.asObservable();
  setSelectedF_CID(fcID: number) {
    this.selectedForeclosuretypeIdSubject.next(fcID);
  }
  private baseUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/foreclosure/foreclosure-types';

  constructor(private http: HttpClient) {}

  getForeclosureTypes(stateID: number): Observable<any[]> {
    console.log('me aya service me');
    const apiUrl = `${this.baseUrl}?state_id=${stateID}`;

    return this.http.get<any[]>(apiUrl);
  }
}
