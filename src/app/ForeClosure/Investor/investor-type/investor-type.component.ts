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
  selectedState:string='';
  selectedForeclosuretype:string='';
  selectedLoan:string='';
  constructor(private SateService: StateService,private ForeclosuretypeService: ForeclosuretypeService,private LoanService: LoanService){}
  ngOnInit():void{
    this.SateService.selectedState$.subscribe(stateName => {
      this.selectedState = stateName;
    });
    this.ForeclosuretypeService.selectedForeclosuretype$.subscribe(foreclosureType=>{
      this.selectedForeclosuretype=foreclosureType;
    });
    this.LoanService.selectedLoan$.subscribe(loanName => {
      this.selectedLoan = loanName;
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
