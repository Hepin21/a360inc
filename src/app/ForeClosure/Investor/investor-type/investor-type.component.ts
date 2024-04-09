import { Component } from '@angular/core';
import { ForeclosuretypeService } from '../../Services/foreclosuretype.service';
import { LoanService } from 'src/app/ForeClosure/Services/loan.service';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
@Component({
  selector: 'app-investor-type',
  templateUrl: './investor-type.component.html',
  styleUrls: ['./investor-type.component.scss'],
})
export class InvestorTypeComponent {
  selectedState: string = '';
  selectedStateID: number = 0;

  selectedForeclosuretype: string = '';
  selectedForeclosuretypeID: number = 0;
  
  selectedLoan: string = '';
  selectedLoanID: number =0;

  constructor(
    private stateService: StateService,
    private ForeclosuretypeService: ForeclosuretypeService,
    private LoanService: LoanService
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
