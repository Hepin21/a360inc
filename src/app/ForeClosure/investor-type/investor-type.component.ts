import { Component, OnInit } from '@angular/core';
import { ForeclosuretypeService } from '../Services/foreclosuretype.service';
import { LoanService } from 'src/app/ForeClosure/Services/loan.service';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
import { InvestorService } from '../Services/investor.service';

@Component({
  selector: 'app-investor-type',
  templateUrl: './investor-type.component.html',
  styleUrls: ['./investor-type.component.scss'],
})
export class InvestorTypeComponent implements OnInit {

  selectedState: string = '';
  selectedStateID: number = 0;
  selectedForeclosuretype: string = '';
  selectedForeclosuretypeID: number = 0;
  selectedLoan: string = '';
  selectedLoanID: number = 0;
  investors: any[] = [];

  constructor(
    private stateService: StateService,
    private foreclosuretypeService: ForeclosuretypeService,
    private loanService: LoanService,
    private investorService: InvestorService
  ) {}

  ngOnInit(): void {
    this.stateService.selectedState$.subscribe((stateName) => {
      this.selectedState = stateName;
    });
    this.stateService.selectedStateId$.subscribe((stateID) => {
      this.selectedStateID = stateID;
    });

    this.foreclosuretypeService.selectedForeclosuretype$.subscribe((foreclosureType) => {
      this.selectedForeclosuretype = foreclosureType;
    });
    this.foreclosuretypeService.selectedForeclosuretypeID$.subscribe((foreclosureTypeId) => {
      this.selectedForeclosuretypeID = foreclosureTypeId;
    });

    this.loanService.selectedLoan$.subscribe((loanName) => {
      this.selectedLoan = loanName;
    });
    this.loanService.selectedLoanId$.subscribe((loanID) => {
      this.selectedLoanID = loanID;
    });

    this.loadInvestors();
  }
  loadInvestors(): void {
    this.investorService.getInvestorTypes(this.selectedStateID, this.selectedForeclosuretypeID, this.selectedLoanID).subscribe(
      (data: any[]) => {
        this.investors = data;
      },
      (error) => {
        console.error('Error fetching Investor types:', error);
      }
    );
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
  selectInvestor(investorName: string, investorID: number) {
    this.investorService.setSelectedInvestor(investorName);
    this.investorService.setSelectedInvestorId(investorID);
  }
  
}
