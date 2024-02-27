import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientSelectionService {
  private selectedClient: BehaviorSubject<string> = new BehaviorSubject<string>('');
  selectedClient$: Observable<string> = this.selectedClient.asObservable();
  constructor() { }
  setSelectedClient(clientName: string) {
    this.selectedClient.next(clientName);
  }
}
