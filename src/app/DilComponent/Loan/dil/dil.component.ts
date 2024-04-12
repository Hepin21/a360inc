import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../Services/loan.service';

@Component({
  selector: 'app-dil',
  templateUrl: './dil.component.html',
  styleUrls: ['./dil.component.scss']
})
export class DILComponent implements OnInit {
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

  loadLoans(): void {
    this.loanService.getLoanTypes().subscribe(
      (data: any[]) => {
        this.loans = data;
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
}
