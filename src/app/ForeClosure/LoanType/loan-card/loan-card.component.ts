import { Component, Input } from '@angular/core';
import { LoanService } from 'src/app/ForeClosure/Services/loan.service';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.scss'],
})
export class LoanCardComponent {
  loans: any[] = [];
  @Input() fctypeID: number = 0;
  constructor(private LoanService: LoanService) {}
  selectLoan(loanName: string, fctypeID:number) {
    this.LoanService.setSelectedLoan(loanName);
    this.fctypeID = fctypeID;
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
