import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForeclosuretypeService {
  private selectedForeclosuretypeSubject:BehaviorSubject<string>=new BehaviorSubject<string>('');
  selectedForeclosuretype$:Observable<string>=this.selectedForeclosuretypeSubject.asObservable();
    constructor() { }
    setSelectedForeclosuretype(foreclosuretypeName:string){
      this.selectedForeclosuretypeSubject.next(foreclosuretypeName);
    }
}
