import { Component } from '@angular/core';
import { LoanService } from 'src/app/ForeClosure/Services/loan.service'; 
import { InvestorService } from '../Services/investor.service'; 
import { ForeclosuretypeService } from '../Services/foreclosuretype.service'; 
import { ClientSelectionService } from 'src/app/DilComponent/Services/client-selection.service';
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
  selectedState:string='';
  selectedForeclosuretype: string = '';
  selectedLoan: string = '';
  selectedInvestor: string = '';
  selectedClient: string = '';
  selectedMilestone: string = '';
  constructor(
    private SateService: StateService,
    private ForeclosuretypeService: ForeclosuretypeService,
    private LoanService: LoanService,
    private InvestorService: InvestorService,
    private clientSelectionService: ClientSelectionService,
    private MilestoneService: MilestoneService
  ) {}
  ngOnInit(): void {
    this.SateService.selectedState$.subscribe(stateName => {
      this.selectedState = stateName;
    });
    this.ForeclosuretypeService.selectedForeclosuretype$.subscribe(
      (foreclosureType) => {
        this.selectedForeclosuretype = foreclosureType;
      }
    );
    this.LoanService.selectedLoan$.subscribe((loanName) => {
      this.selectedLoan = loanName;
    });
    this.InvestorService.selectedInvestor$.subscribe((investorName) => {
      this.selectedInvestor = investorName;
    });
    this.clientSelectionService.selectedClient$.subscribe((clientName) => {
      this.selectedClient = clientName;
    });
    this.MilestoneService.selectedMilestone$.subscribe((milestoneName) => {
      this.selectedMilestone = milestoneName;
    });
  }

  //This Code is Use for Header title Change
  headerTitle: string = 'Foreclosure Fee Schedule';
}
