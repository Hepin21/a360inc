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
  public selectedMilestoneId$: Observable<number> =
    this.selectedMilestoneIDSubject.asObservable();
  setSelectedMilestoneId(milestoneID: number) {
    this.selectedMilestoneIDSubject.next(milestoneID);
  }
  private baseUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/milestones';

  constructor(private http: HttpClient) {}

  getMilestoneTypes(loanID: number, investorID:number, clientID:number): Observable<any[]> {
    console.log('me aya service me');
    const apiUrl = `${this.baseUrl}?loan_type_id=${loanID}&investor_type_id=${investorID}&client_id=${clientID}`;
    return this.http.get<any[]>(apiUrl);
  }
}
