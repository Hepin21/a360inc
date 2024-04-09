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

  private selectedMilestoneIDSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  public selectedMilestoneID$: Observable<number> =
    this.selectedMilestoneIDSubject.asObservable();
  setSelectedMilestoneID(milestoneID: number) {
    this.selectedMilestoneIDSubject.next(milestoneID);
  }
  private baseUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/foreclosure/milestones';

  constructor(private http: HttpClient) {}

  getMilestoneTypes(stateID: number, foreclosureTypeId: number, loanID:number, investorID:number, clientID:number): Observable<any[]> {
    const apiUrl = `${this.baseUrl}?state_id=${stateID}&foreclosure_type_id=${foreclosureTypeId}&loan_type_id=${loanID}&investor_type_id=${investorID}&client_id=${clientID}`;
    return this.http.get<any[]>(apiUrl);
  }
}
