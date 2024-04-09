import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoanService } from 'src/app/ForeClosure/Services/loan.service';
import { ForeclosuretypeService } from '../../Services/foreclosuretype.service';
import { StateService } from '../../Services/state.service';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.scss'],
})
export class LoanCardComponent implements OnInit {
  loans: any[] = [];
  @Output() loanID: EventEmitter<number> = new EventEmitter<number>();

  @Input() stateID: number = 0;
  @Input() foreclosureTypeId: number = 0;

  constructor(private LoanService: LoanService) {}
  selectLoan(loanName: string, loanID: number) {
    this.LoanService.setSelectedLoan(loanName);
    this.LoanService.setSelectedLoanId(loanID);
  }
  ngOnInit(): void {
    this.loadLoans();
  }
  loadLoans(): void {
    this.LoanService.getLoanTypes(this.stateID, this.foreclosureTypeId).subscribe(
      (data: any[]) => {
        this.loans = data;
        console.log(this.stateID);
        console.log(this.foreclosureTypeId);
      },
      (error) => {
        console.error('Error fetching Loans types:', error);
      }
    );
  }
}
