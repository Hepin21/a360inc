import { Component } from '@angular/core';
import { LoanService } from '../../Services/loan.service';
@Component({
  selector: 'app-conventional',
  templateUrl: './conventional.component.html',
  styleUrls: ['./conventional.component.scss'],
})
export class ConventionalComponent {
  selectedLoan: string = '';
  selectedLoanID: number = 0;

  constructor(private LoanService: LoanService) {}
  ngOnInit(): void {
    this.LoanService.selectedLoan$.subscribe((loanName) => {
      this.selectedLoan = loanName;
    });
    this.LoanService.selectedLoanId$.subscribe((loanID) => {
      this.selectedLoanID = loanID;
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
