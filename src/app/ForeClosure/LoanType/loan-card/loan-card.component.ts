import { Component } from '@angular/core';
import { LoanService } from 'src/app/DilComponent/conventional/loan.service';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.scss']
})
export class LoanCardComponent {
  loans=[{name:'Conventional Insured/PMI'},{name:'FHA'},{name:'USDA'},{name:'VA'}];
  constructor(private LoanService: LoanService) { }
  
  selectLoan(loanName: string) {
    this.LoanService. setSelectedLoan(loanName);
  }
       ngOnInit(): void {
       }
}
