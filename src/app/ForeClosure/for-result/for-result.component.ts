import { Component } from '@angular/core';
import { LoanService } from 'src/app/ForeClosure/Services/loan.service';
import { InvestorService } from '../Services/investor.service';
import { ForeclosuretypeService } from '../Services/foreclosuretype.service';
import { ClientSelectionService } from '../Services/client-selection.service';
import { MilestoneService } from '../Services/milestone.service';
import { StateService } from 'src/app/ForeClosure/Services/state.service';

@Component({
  selector: 'app-for-result',
  templateUrl: './for-result.component.html',
  styleUrls: ['./for-result.component.scss'],
})
export class ForResultComponent {
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); //
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
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
  selectedMilestone: string = '';
  selectedMilestoneID: number = 0;
  constructor(
    private stateService: StateService,
    private ForeclosuretypeService: ForeclosuretypeService,
    private LoanService: LoanService,
    private InvestorService: InvestorService,
    private clientSelectionService: ClientSelectionService,
    private MilestoneService: MilestoneService
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
    this.MilestoneService.selectedMilestone$.subscribe((milestoneName) => {
      this.selectedMilestone = milestoneName;
    });
    this.MilestoneService.selectedMilestoneID$.subscribe((milestoneID) => {
      this.selectedMilestoneID = milestoneID;
    });
  }

  //This Code is Use for Header title Change
  headerTitle: string = 'Foreclosure Fee Schedule';
}
