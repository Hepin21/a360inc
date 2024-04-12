import { Component, Input, OnInit } from '@angular/core';
import { ClientSelectionService } from 'src/app/DilComponent/Services/client-selection.service';
import { InvestorService } from 'src/app/DilComponent/Services/investor.service';
import { LoanService } from '../../Services/loan.service';

@Component({
  selector: 'app-fnma',
  templateUrl: './fnma.component.html',
  styleUrls: ['./fnma.component.scss'],
})
export class FnmaComponent implements OnInit {
  selectedLoan: string = '';
  selectedLoanID: number = 0;
  selectedInvestor: string = '';
  selectedInvestorID: number = 0;
  clients: any[] = [];

  constructor(
    private LoanService: LoanService,
    private InvestorService: InvestorService,
    private clientSelectionService: ClientSelectionService
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
    this.loadClients();
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

  headerTitle: string = 'DIL Fee Schedule';

  loadClients(): void {
    this.clientSelectionService
      .getClientTypes(this.selectedLoanID, this.selectedInvestorID)
      .subscribe(
        (data: any[]) => {
          this.clients = data;
        },
        (error) => {
          console.error('Error fetching client types:', error);
        }
      );
  }
  selectClient(clientName: string, clientID: number) {
    this.clientSelectionService.setSelectedClient(clientName);
    this.clientSelectionService.setSelectedClientId(clientID);
  }
}
