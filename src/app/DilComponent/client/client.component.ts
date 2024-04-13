import { Component, Input, OnInit } from '@angular/core';
import { ClientSelectionService } from 'src/app/DilComponent/Services/client-selection.service';
import { InvestorService } from 'src/app/DilComponent/Services/investor.service';
import { LoanService } from '../Services/loan.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
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
  filteredClients: any[] = [];

  loadClients(): void {
    this.clientSelectionService
      .getClientTypes(this.selectedLoanID, this.selectedInvestorID)
      .subscribe(
        (data: any[]) => {
          this.clients = data;
          this.filteredClients = data;
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
  noClientsFound: boolean = false;

  searchClients(event: any): void {
    const query: string = (event.target as HTMLInputElement).value;
    if (query.trim() !== '') {
      // Filter states based on query
      this.filteredClients = this.clients.filter((clients) =>
        clients.name.toLowerCase().includes(query.toLowerCase())
      );
      this.noClientsFound = this.filteredClients.length === 0; // Check if any states are found
    } else {
      // If query is empty, display all states
      this.filteredClients = this.clients;
      this.noClientsFound = false; // Reset noStatesFound if query is empty
    }
  }
}
