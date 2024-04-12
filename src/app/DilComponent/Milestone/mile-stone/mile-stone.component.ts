import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientSelectionService } from 'src/app/DilComponent/Services/client-selection.service';
import { InvestorService } from 'src/app/DilComponent/Services/investor.service';
import { LoanService } from '../../Services/loan.service';
import { MilestoneService } from 'src/app/DilComponent/Services/milestone.service';

@Component({
  selector: 'app-mile-stone',
  templateUrl: './mile-stone.component.html',
  styleUrls: ['./mile-stone.component.scss'],
})
export class MileStoneComponent implements OnInit {
  selectedLoan: string = '';
  selectedLoanID: number = 0;
  selectedInvestor: string = '';
  selectedInvestorID: number = 0;
  selectedClient: string = '';
  selectedClientID: number = 0;
  milestones: any[] = [];

  constructor(
    private LoanService: LoanService,
    private InvestorService: InvestorService,
    private clientSelectionService: ClientSelectionService,
    private MilestoneService: MilestoneService
  ) {}

  ngOnInit(): void {
    this.subscribeToServices();
    this.loadMilestones();
  }

  subscribeToServices(): void {
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
  }

  loadMilestones(): void {
    this.MilestoneService.getMilestoneTypes(
      this.selectedLoanID,
      this.selectedInvestorID,
      this.selectedClientID
    ).subscribe(
      (data: any[]) => {
        this.milestones = data;
      },
      (error) => {
        console.error('Error fetching milestones types:', error);
      }
    );
  }

  selectedMilestone(milestoneName: string, milestoneID: number) {
    this.MilestoneService.setSelectedMilestone(milestoneName);
    this.MilestoneService.setSelectedMilestoneId(milestoneID);
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

  //This Code is Use for Header title Change
  headerTitle: string = 'DIL Fee Schedule';
}
