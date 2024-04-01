// import { Component } from '@angular/core';
// import {LoanService} from "../conventional/loan.service"
// @Component({
//   selector: 'app-dil-card',
//   templateUrl: './dil-card.component.html',
//   styleUrls: ['./dil-card.component.scss'],
//   providers : [LoanService]
// })
// export class DilCardComponent {
//   loans=[{name:'Conventional Insured/PMI'},{name:'FHA'},{name:"USDA"},{name:'VA'}];
// constructor(private LoanService: LoanService) { }

// selectLoan(loanName: string) {
//   this.LoanService. setSelectedLoan(loanName);
// }
//      ngOnInit(): void {
//      }
// }


import { Component, OnInit } from '@angular/core';
import { LoanService } from '../conventional/loan.service';

@Component({
  selector: 'app-dil-card',
  templateUrl: './dil-card.component.html',
  styleUrls: ['./dil-card.component.scss']
})
export class DilCardComponent implements OnInit {
  loans : any[] = [];

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans(): void {
    this.loanService.getLoanTypes().subscribe(
      (data: any[]) => {
        this.loans = data;
      },
      (error) => {
        console.error('Error fetching loan types:', error);
      }
    );
  }

  selectLoan(loanName: string): void {
    // Perform any actions when a loan is selected
    console.log('Selected loan:', loanName);
  }
}

