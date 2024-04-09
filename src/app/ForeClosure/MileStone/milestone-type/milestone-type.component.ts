import { Component } from '@angular/core';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
import { ForeclosuretypeService } from '../../Services/foreclosuretype.service';
import { LoanService } from '../../Services/loan.service';
import { InvestorService } from '../../Services/investor.service';
import { ClientSelectionService } from '../../Services/client-selection.service';

@Component({
  selector: 'app-milestone-type',
  templateUrl: './milestone-type.component.html',
  styleUrls: ['./milestone-type.component.scss'],
})
export class MilestoneTypeComponent {
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
  constructor(
    private stateService: StateService,
    private ForeclosuretypeService: ForeclosuretypeService,
    private LoanService: LoanService,
    private InvestorService: InvestorService,
    private clientSelectionService: ClientSelectionService
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
    this.clientSelectionService.selectedClient$.subscribe((clientName) => {
      this.selectedClient = clientName;
    });
    this.clientSelectionService.selectedClientId$.subscribe((clientID) => {
      this.selectedClientID = clientID;
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
