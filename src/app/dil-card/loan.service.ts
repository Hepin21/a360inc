import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  loans=['Conventional Insured/PMI','FHA',"USDA",'VA'];
  // getInfo()
  selectLoan():string[]{
    return this.loans
  }
  constructor() { }
}
