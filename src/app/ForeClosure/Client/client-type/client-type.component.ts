import { Component } from '@angular/core';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
import { ForeclosuretypeService } from '../../Services/foreclosuretype.service';
import { LoanService } from '../../Services/loan.service';
import { InvestorService } from '../../Services/investor.service';

@Component({
  selector: 'app-client-type',
  templateUrl: './client-type.component.html',
  styleUrls: ['./client-type.component.scss'],
})
export class ClientTypeComponent {
  selectedState: string = '';
  selectedStateID: number = 0;
  selectedForeclosuretype: string = '';
  selectedForeclosuretypeID: number = 0;
  selectedLoan: string = '';
  selectedLoanID: number = 0;
  selectedInvestor: string = '';
  selectedInvestorID: number = 0;
  constructor(
    private stateService: StateService,
    private ForeclosuretypeService: ForeclosuretypeService,
    private LoanService: LoanService,
    private InvestorService: InvestorService
  ) {}
  ngOnInit(): void {
    this.stateService.selectedState$.subscribe((stateName) => {
      this.selectedState = stateName;
    });
    this.stateService.selectedStateId$.subscribe((stateID) => {
      this.selectedStateID = stateID;
    });
    this.ForeclosuretypeService.selectedForeclosuretype$.subscribe(
      (foreclosureType) => {
        this.selectedForeclosuretype = foreclosureType;
      }
    );
    this.ForeclosuretypeService.selectedForeclosuretypeID$.subscribe(
      (foreclosureTypeId) => {
        this.selectedForeclosuretypeID = foreclosureTypeId;
      }
    );
    this.LoanService.selectedLoan$.subscribe((loanName) => {
      this.selectedLoan = loanName;
    });
    this.LoanService.selectedLoanId$.subscribe((loanID) => {
      this.selectedLoanID = loanID;
    });
    this.InvestorService.selectedInvestor$.subscribe((investorName) => {
      this.selectedInvestor = investorName;
    });
    this.InvestorService.selectedInvestorId$.subscribe((investorID) => {
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
  headerTitle: string = 'Foreclosure Fee Schedule';
}
