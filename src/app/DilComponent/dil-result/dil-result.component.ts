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
  selectedInvestor: string = '';
  selectedClient: string = '';
  selectedMilestone: string = '';
  constructor(
    private clientSelectionService: ClientSelectionService,
    private LoanService: LoanService,
    private InvestorService: InvestorService,
    private MilestoneService: MilestoneService
  ) {}
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
