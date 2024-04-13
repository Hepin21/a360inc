import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
import { ForeclosuretypeService } from '../Services/foreclosuretype.service';
import { LoanService } from '../Services/loan.service';
import { InvestorService } from '../Services/investor.service';
import { ClientSelectionService } from '../Services/client-selection.service';

@Component({
  selector: 'app-client-type',
  templateUrl: './client-type.component.html',
  styleUrls: ['./client-type.component.scss'],
})
export class ClientTypeComponent implements OnInit {
  selectedState: string = '';
  selectedStateID: number = 0;
  selectedForeclosuretype: string = '';
  selectedForeclosuretypeID: number = 0;
  selectedLoan: string = '';
  selectedLoanID: number = 0;
  selectedInvestor: string = '';
  selectedInvestorID: number = 0;
  selectedClient: string = '';
  selectedClientID: number = 0;

  clients: any[] = [];

  constructor(
    private stateService: StateService,
    private foreclosuretypeService: ForeclosuretypeService,
    private loanService: LoanService,
    private investorService: InvestorService,
    private clientSelectionService: ClientSelectionService
  ) {}
  ngOnInit(): void {
    this.stateService.selectedState$.subscribe((stateName) => {
      this.selectedState = stateName;
    });
    this.stateService.selectedStateId$.subscribe((stateID) => {
      this.selectedStateID = stateID;
    });

    this.foreclosuretypeService.selectedForeclosuretype$.subscribe(
      (foreclosureType) => {
        this.selectedForeclosuretype = foreclosureType;
      }
    );
    this.foreclosuretypeService.selectedForeclosuretypeID$.subscribe(
      (foreclosureTypeId) => {
        this.selectedForeclosuretypeID = foreclosureTypeId;
      }
    );

    this.loanService.selectedLoan$.subscribe((loanName) => {
      this.selectedLoan = loanName;
    });
    this.loanService.selectedLoanId$.subscribe((loanID) => {
      this.selectedLoanID = loanID;
    });

    this.investorService.selectedInvestor$.subscribe((investorName) => {
      this.selectedInvestor = investorName;
    });
    this.investorService.selectedInvestorId$.subscribe((investorID) => {
      this.selectedInvestorID = investorID;
    });

    this.clientSelectionService.selectedClient$.subscribe((clientName) => {
      this.selectedClient = clientName;
    });
    this.clientSelectionService.selectedClientId$.subscribe((clientID) => {
      this.selectedClientID = clientID;
    });

    this.loadClients();
  }
  filteredClients: any[] = [];

  loadClients(): void {
    this.clientSelectionService
      .getClientTypes(
        this.selectedStateID,
        this.selectedForeclosuretypeID,
        this.selectedLoanID,
        this.selectedInvestorID
      )
      .subscribe(
        (data: any[]) => {
          this.clients = data;
          this.filteredClients = data;
        },
        (error) => {
          console.error('Error fetching Clients types:', error);
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
