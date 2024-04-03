import { Component, OnInit } from '@angular/core';
import { DilLoanTypeService } from '../Services/dil-loan-type.service'; 

@Component({
  selector: 'app-dil-card',
  templateUrl: './dil-card.component.html',
  styleUrls: ['./dil-card.component.scss']
})
export class DilCardComponent implements OnInit {
  loans : any[] = [];

  constructor(private loanService: DilLoanTypeService) { }

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans(): void {
    this.loanService.getDilLoanTypes().subscribe(
      (data: any[]) => {
        // console.log("Are Pan");
        this.loans = data;
      },
      (error) => {
        console.log("Be Yarr");
        console.error('Error fetching loan types:', error);
      }
    );
  }

  selectLoan(loanName: string): void {
    // Perform any actions when a loan is selected
    console.log('Selected loan:', loanName);
  }
}

