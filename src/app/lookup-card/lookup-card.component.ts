import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-lookup-card',
  templateUrl: './lookup-card.component.html',
  styleUrls: ['./lookup-card.component.scss']
})
export class LookupCardComponent {
steps: MenuItem[]|undefined;
searchQuery: any;
lookupItems: any;
isNextButtonDisabled: any;
nextStep() {
throw new Error('Method not implemented.');
}

}
