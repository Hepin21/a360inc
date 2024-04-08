import { Component } from '@angular/core';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
import { ForeclosuretypeService } from '../../Services/foreclosuretype.service';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
})
export class LoanComponent {
  //* This is For the Progress Panel 
  selectedStateID: number = 0;
  selectedState:string='';

  selectedForeclosuretypeID: number = 0;
  selectedForeclosuretype: string = '';
  constructor(private stateService: StateService,
    private ForeclosuretypeService: ForeclosuretypeService){}
  ngOnInit():void{
    this.stateService.selectedStateId$.subscribe(stateID => {
      this.selectedStateID = stateID;
    });
    this.stateService.selectedState$.subscribe(stateName => {
      this.selectedState = stateName;
    });
    this.stateService.selectedStateId$.subscribe(fctID => {
      this.selectedForeclosuretypeID = fctID;
    });
    this.ForeclosuretypeService.selectedForeclosuretype$.subscribe(
      (foreclosureType) => {
        this.selectedForeclosuretype = foreclosureType;
      }
    );
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
