import { Component } from '@angular/core';
import { InvestorService } from 'src/app/DilComponent/Services/investor.service';
import { LoanService } from '../../Services/loan.service';
@Component({
  selector: 'app-fnma',
  templateUrl: './fnma.component.html',
  styleUrls: ['./fnma.component.scss'],
})
export class FnmaComponent {
  
  selectedLoan: string = '';
  selectedLoanID: number = 0;
  
  selectedInvestor: string = '';
  selectedInvestorID: number = 0;
  constructor(
    private LoanService: LoanService,
    private InvestorService: InvestorService
  ) {}
  ngOnInit(): void {
    this.LoanService.selectedLoan$.subscribe((loanName) => {
      this.selectedLoan = loanName;
    });
    this.LoanService.selectedLoanId$.subscribe((loanID) => {
      this.selectedLoanID = loanID;
    });
    this.InvestorService.selectedInvestor$.subscribe((investorName) => {
      this.selectedInvestor = investorName;
    });
    this.InvestorService.selectedInvestorID$.subscribe((investorID) => {
      this.selectedInvestorID = investorID;
    });
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
  //This Code is Use for Header title Change
  headerTitle: string = 'DIL Fee Schedule';
}
