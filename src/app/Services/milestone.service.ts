import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MilestoneService {
  private selectedMilestoneSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public selectedMilestone$: Observable<string>= this.selectedMilestoneSubject.asObservable();
    constructor() { }
    setSelectedMilestone(milestoneName: string) {
      this.selectedMilestoneSubject.next(milestoneName);
    }
}
