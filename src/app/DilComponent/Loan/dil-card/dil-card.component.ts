import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoanService } from '../../Services/loan.service';
@Component({
  selector: 'app-dil-card',
  templateUrl: './dil-card.component.html',
  styleUrls: ['./dil-card.component.scss'],
})
export class DilCardComponent implements OnInit {
  loans: any[] = [];
  @Output() loanID: EventEmitter<number> = new EventEmitter<number>();

  constructor(private loanService: LoanService) {}

  selectLoan(loanName: string, loanID: number): void {
    this.loanService.setSelectedLoan(loanName);
    this.loanService.setSelectedLoanId(loanID);
  }

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans(): void {
    this.loanService.getLoanTypes().subscribe(
      (data: any[]) => {
        this.loans = data;
      },
      (error) => {
        console.log('Be Yarr');
        console.error('Error fetching loan types:', error);
      }
    );
  }
}
