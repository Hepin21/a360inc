import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
import { ForeclosuretypeService } from '../Services/foreclosuretype.service';
import { LoanService } from '../Services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
})

export class LoanComponent implements OnInit {

  selectedState: string = '';
  selectedStateID: number = 0;
  selectedForeclosuretypeID: number = 0;
  selectedForeclosuretype: string = '';

  headerTitle: string = 'Foreclosure Fee Schedule';
  loans: any[] = [];

  constructor(
    private stateService: StateService,
    private foreclosuretypeService: ForeclosuretypeService,
    private loanService: LoanService
  ) {}

  ngOnInit(): void {
    this.stateService.selectedState$.subscribe(stateName => {
      this.selectedState = stateName;
    });
    this.stateService.selectedStateId$.subscribe(stateID => {
      this.selectedStateID = stateID;
    });
    this.foreclosuretypeService.selectedForeclosuretypeID$.subscribe(foreclosureTypeId => {
      this.selectedForeclosuretypeID = foreclosureTypeId;
    });
    this.foreclosuretypeService.selectedForeclosuretype$.subscribe(foreclosureType => {
      this.selectedForeclosuretype = foreclosureType;
    });
    this.loadLoans();
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  filteredLoans: any[] = [];

  loadLoans(): void {
    this.loanService.getLoanTypes(this.selectedStateID, this.selectedForeclosuretypeID).subscribe(
      (data: any[]) => {
        this.loans = data;
        this.filteredLoans = data;
      },
      (error) => {
        console.error('Error fetching Loans types:', error);
      }
    );
  }

  selectLoan(loanName: string, loanID: number) {
    this.loanService.setSelectedLoan(loanName);
    this.loanService.setSelectedLoanId(loanID);
  }
  noLoansFound: boolean = false;

  searchLoans(event: any): void {
    const query: string = (event.target as HTMLInputElement).value;
    if (query.trim() !== '') {
      // Filter states based on query
      this.filteredLoans = this.loans.filter((loans) =>
        loans.type.toLowerCase().includes(query.toLowerCase())
      );
      this.noLoansFound = this.filteredLoans.length === 0; // Check if any states are found
    } else {
      // If query is empty, display all states
      this.filteredLoans = this.loans;
      this.noLoansFound = false; // Reset noStatesFound if query is empty
    }
  }
}