import { Component } from '@angular/core';
import { StateService } from '../../Services/state.service'

@Component({
  selector: 'app-fore-type',
  templateUrl: './fore-type.component.html',
  styleUrls: ['./fore-type.component.scss']
})
export class ForeTypeComponent {
  selectedState: string = '';
  constructor(private StateService: StateService) {}

  ngOnOnit(): void {
    this.StateService.selectedState$.subscribe((stateName) => {
      this.selectedState = stateName;
    });
  }
  value: string | undefined;

}
