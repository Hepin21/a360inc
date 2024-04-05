import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../Services/loan.service';
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
    this.loanService.setSelectedLoan(loanName);
    console.log('Selected loan:', loanName);
  }
}

