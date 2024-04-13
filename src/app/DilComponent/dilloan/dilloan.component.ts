import { Component, OnInit } from '@angular/core';
import { LoanService } from '../Services/loan.service';

@Component({
  selector: 'app-dilloan',
  templateUrl: './dilloan.component.html',
  styleUrls: ['./dilloan.component.scss']
})
export class DILLoanComponent implements OnInit {
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }
    }
  }
  
  headerTitle: string = 'DIL Fee Schedule';
  loans: any[] = [];

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.loadLoans();
  }
  filteredLoans: any[] = [];

  loadLoans(): void {
    this.loanService.getLoanTypes().subscribe(
      (data: any[]) => {
        this.loans = data;
        this.filteredLoans = data;
      },
      (error) => {
        console.error('Error fetching loan types:', error);
      }
    );
  }

  selectLoan(loanName: string, loanID: number): void {
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
