// dil-loan-type.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DilLoanTypeService {
  private apiUrl = 'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/loan-types';

  constructor(private http: HttpClient) { }

  getLoanTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
