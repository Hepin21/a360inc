import { Component } from '@angular/core';
import{LoanService} from 'src/app/DilComponent/Services/loan.service';
import{InvestorService} from 'src/app/DilComponent/Services/investor.service';

@Component({
  selector: 'app-fnma',
  templateUrl: './fnma.component.html',
  styleUrls: ['./fnma.component.scss']
})
export class FnmaComponent {
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); // 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }}}

      constructor(private LoanService: LoanService, private InvestorService:InvestorService) { }
  selectedLoan:string='';
  selectedInvestor:string='';
  ngOnInit(): void {
    this.LoanService.selectedLoan$.subscribe(loanName => {
      this.selectedLoan = loanName;
    });
    this.InvestorService.selectedInvestor$.subscribe(investorName => {
      this.selectedInvestor = investorName;
    });
  }
    //This Code is Use for Header title Change
    headerTitle: string = 'DIL Fee Schedule';
}
