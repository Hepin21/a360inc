import { Component } from '@angular/core';
import { ClientSelectionService } from 'src/app/InvestorType/client-selection.service';
import { LoanService } from 'src/app/DilComponent/conventional/loan.service';
import { InvestorService } from 'src/app/DilComponent/conventional/investor.service';
import { MilestoneService } from 'src/app/Services/milestone.service';

@Component({
  selector: 'app-dil-result',
  templateUrl: './dil-result.component.html',
  styleUrls: ['./dil-result.component.scss'],
})
export class DilResultComponent {
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); //
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  selectedClient: string = '';
  constructor(
    private clientSelectionService: ClientSelectionService,
    private LoanService: LoanService,
    private InvestorService: InvestorService,
    private MilestoneService: MilestoneService
  ) {}
  selectedInvestor: string = '';
  selectedLoan: string = '';
  selectedMilestone: string = '';
  ngOnInit(): void {
    this.clientSelectionService.selectedClient$.subscribe((clientName) => {
      this.selectedClient = clientName;
    });
    this.LoanService.selectedLoan$.subscribe((loanName) => {
      this.selectedLoan = loanName;
    });
    this.InvestorService.selectedInvestor$.subscribe((investorName) => {
      this.selectedInvestor = investorName;
    });
    this.MilestoneService.selectedMilestone$.subscribe((milestoneName) => {
      this.selectedMilestone = milestoneName;
    });
  }

  //This Code is Use for Header title Change
  headerTitle: string = 'DIL Fee Schedule';
}
