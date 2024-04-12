import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
import { ForeclosuretypeService } from '../Services/foreclosuretype.service';
import { LoanService } from '../Services/loan.service';
import { InvestorService } from '../Services/investor.service';
import { ClientSelectionService } from '../Services/client-selection.service';
import { MilestoneService } from '../Services/milestone.service';

@Component({
  selector: 'app-milestone-type',
  templateUrl: './milestone-type.component.html',
  styleUrls: ['./milestone-type.component.scss'],
})
export class MilestoneTypeComponent implements OnInit {

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

  headerTitle: string = 'Foreclosure Fee Schedule';
  milestones: any[] = [];

  constructor(
    private stateService: StateService,
    private foreclosuretypeService: ForeclosuretypeService,
    private loanService: LoanService,
    private investorService: InvestorService,
    private clientSelectionService: ClientSelectionService,
    private milestoneService: MilestoneService
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

    this.milestoneService.selectedMilestone$.subscribe((milestoneName) => {
      this.selectedMilestone = milestoneName;
    });
    this.milestoneService.selectedMilestoneID$.subscribe((milestoneID) => {
      this.selectedMilestoneID = milestoneID;
    });

    this.loadMilestones();
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

  loadMilestones(): void {
    this.milestoneService.getMilestoneTypes(
      this.selectedStateID,
      this.selectedForeclosuretypeID,
      this.selectedLoanID,
      this.selectedInvestorID,
      this.selectedClientID
    ).subscribe(
      (data: any[]) => {
        this.milestones = data;
      },
      (error) => {
        console.error('Error fetching Milestone types:', error);
      }
    );
  }
  selectMilestone(milestoneName: string, milestoneID: number) {
    this.milestoneService.setSelectedMilestone(milestoneName);
    this.milestoneService.setSelectedMilestoneID(milestoneID);
  }
}
