import { Component } from '@angular/core';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
import { ForeclosuretypeService } from '../../Services/foreclosuretype.service';
import { LoanService } from '../../Services/loan.service';
import { InvestorService } from '../../Services/investor.service';
// import { StateService }

@Component({
  selector: 'app-client-type',
  templateUrl: './client-type.component.html',
  styleUrls: ['./client-type.component.scss'],
})
export class ClientTypeComponent {
  selectedState:string='';
  selectedForeclosuretype: string = '';
  selectedLoan: string = '';
  selectedInvestor: string = '';
  constructor(private SateService: StateService,
    private ForeclosuretypeService: ForeclosuretypeService,
    private LoanService: LoanService,
    private InvestorService: InvestorService){}
  ngOnInit():void{
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
