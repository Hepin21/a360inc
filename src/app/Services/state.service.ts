import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private selectedStateSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public selectedState$: Observable<string>= this.selectedStateSubject.asObservable();
    constructor() { }
    setSelectedState(stateName: string) {
      this.selectedStateSubject.next(stateName);
    }
}
