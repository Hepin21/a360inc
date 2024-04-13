import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InvestorService } from '../Services/investor.service';
import { LoanService } from '../Services/loan.service';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss'],
})
export class InvestorComponent implements OnInit {
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
  filteredInvestors: any[] = [];

  loadInvestors(): void {
    this.investorService.getInvestorTypes(this.selectedLoanID).subscribe(
      (data: any[]) => {
        this.investors = data;
        this.filteredInvestors = data;
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
