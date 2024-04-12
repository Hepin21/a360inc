import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InvestorService } from '../../Services/investor.service';
import { LoanService } from '../../Services/loan.service';

@Component({
  selector: 'app-conventional',
  templateUrl: './conventional.component.html',
  styleUrls: ['./conventional.component.scss'],
})
export class ConventionalComponent implements OnInit {
  selectedLoan: string = '';
  selectedLoanID: number = 0;
  investors: any[] = [];

  @Output() investorID: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private LoanService: LoanService,
    private investorService: InvestorService
  ) {}

  ngOnInit(): void {
    this.LoanService.selectedLoan$.subscribe((loanName) => {
      this.selectedLoan = loanName;
    });
    this.LoanService.selectedLoanId$.subscribe((loanID) => {
      this.selectedLoanID = loanID;
    });
    this.loadInvestors();
  }

  loadInvestors(): void {
    this.investorService.getInvestorTypes(this.selectedLoanID).subscribe(
      (data: any[]) => {
        this.investors = data;
      },
      (error) => {
        console.error('Error fetching investors types:', error);
      }
    );
  }

  selectInvestor(investorName: string, investorID: number) {
    this.investorService.setSelectedInvestor(investorName);
    this.investorService.setSelectedInvestorID(investorID);
    this.investorID.emit(investorID);
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); //
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // This Code is Use for Header title Change
  headerTitle: string = 'DIL Fee Schedule';
}
