import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForeclosuretypeService {
  private selectedForeclosuretypeSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  selectedForeclosuretype$: Observable<string> =
    this.selectedForeclosuretypeSubject.asObservable();
  setSelectedForeclosuretype(foreclosuretypeName: string) {
    this.selectedForeclosuretypeSubject.next(foreclosuretypeName);
  }
  private apiUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/foreclosure/foreclosure-types?state_id=28';

  constructor(private http: HttpClient) {}

  getForeclosureTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
