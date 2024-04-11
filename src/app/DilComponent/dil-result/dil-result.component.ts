import { Component } from '@angular/core';
import { ClientSelectionService } from 'src/app/DilComponent/Services/client-selection.service';
import { InvestorService } from 'src/app/DilComponent/Services/investor.service';
import { MilestoneService } from 'src/app/DilComponent/Services/milestone.service';
import { LoanService } from '../Services/loan.service';
@Component({
  selector: 'app-dil-result',
  templateUrl: './dil-result.component.html',
  styleUrls: ['./dil-result.component.scss'],
})
export class DilResultComponent {
  selectedLoan: string = '';
  selectedLoanID: number = 0;
  selectedInvestor: string = '';
  selectedInvestorID: number = 0;
  selectedClient: string = '';
  selectedClientID: number = 0;
  selectedMilestone: string = '';
  selectedMilestoneID: number = 0;
  constructor(
    private clientSelectionService: ClientSelectionService,
    private LoanService: LoanService,
    private InvestorService: InvestorService,
    private MilestoneService: MilestoneService
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
    this.clientSelectionService.selectedClient$.subscribe((clientName) => {
      this.selectedClient = clientName;
    });
    this.clientSelectionService.selectedClientId$.subscribe((clientID) => {
      this.selectedClientID = clientID;
    });
    this.MilestoneService.selectedMilestone$.subscribe((milestoneName) => {
      this.selectedMilestone = milestoneName;
    });
    this.MilestoneService.selectedMilestoneId$.subscribe((milestoneID) => {
      this.selectedMilestoneID = milestoneID;
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
  headerTitle: string = 'DIL Fee Schedule';
}
