import { Component } from '@angular/core';
import { LoanService } from 'src/app/ForeClosure/Services/loan.service';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.scss'],
})
export class LoanCardComponent {
  loans: any[] = [];
  constructor(private LoanService: LoanService) {}
  selectLoan(loanName: string) {
    this.LoanService.setSelectedLoan(loanName);
  }
  ngOnInit(): void {
    this.loadLoans();
  }
  loadLoans(): void {
    this.LoanService.getLoanTypes().subscribe(
      (data: any[]) => {
        this.loans = data;
      },
      (error) => {
        console.error('Error fetching Loans types:', error);
      }
    );
  }
}
