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
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); //
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  filteredInvestors: any[] = [];

  loadInvestors(): void {
    this.investorService.getInvestorTypes(this.selectedStateID, this.selectedForeclosuretypeID, this.selectedLoanID).subscribe(
      (data: any[]) => {
        this.investors = data;
        this.filteredInvestors = data;
      },
      (error) => {
        console.error('Error fetching Investor types:', error);
      }
    );
  }
  //This Code is Use for Header title Change
  headerTitle: string = 'Foreclosure Fee Schedule';
 
  selectInvestor(investorName: string, investorID: number) {
    this.investorService.setSelectedInvestor(investorName);
    this.investorService.setSelectedInvestorId(investorID);
  }
 
  noInvestorFound: boolean = false;

  searchInvestor(event: any): void {
    const query: string = (event.target as HTMLInputElement).value;
    if (query.trim() !== '') {
      // Filter states based on query
      this.filteredInvestors = this.investors.filter((investor) =>
        investor.type.toLowerCase().includes(query.toLowerCase())
      );
      this.noInvestorFound = this.filteredInvestors.length === 0; // Check if any states are found
    } else {
      // If query is empty, display all states
      this.filteredInvestors = this.investors;
      this.noInvestorFound = false; // Reset noStatesFound if query is empty
    }
  }
}
