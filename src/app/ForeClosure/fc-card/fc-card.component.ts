import { Component } from '@angular/core';
import { StateService } from 'src/app/Services/state.service'
import { ForeclosuretypeService } from 'src/app/Services/foreclosuretype.service';

@Component({
  selector: 'app-fc-card',
  templateUrl: './fc-card.component.html',
  styleUrls: ['./fc-card.component.scss'],
  providers : [StateService]
})
export class FcCardComponent {

  foretypes=[{name:'Judicial'},{name:'Non-Judicial'}];

  constructor(private StateService: StateService, private ForeclosuretypeService:ForeclosuretypeService ) { }
  selectForeClosure(foreclosuretypeName: string) {
    this.ForeclosuretypeService.setSelectedForeclosuretype(foreclosuretypeName);
  }
  selectState(stateName: string) {
    this.StateService.setSelectedState(stateName);}
}