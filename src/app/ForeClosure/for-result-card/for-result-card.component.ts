import { Component } from '@angular/core';

@Component({
  selector: 'app-for-result-card',
  templateUrl: './for-result-card.component.html',
  styleUrls: ['./for-result-card.component.scss']
})
export class ForResultCardComponent {
  fees = [
    { abbreviation: 'TOTAl ALLOWABLE AMOUNT', name: '$400.00' },
    { abbreviation: 'ALLOWABLE%', name: '50 % 1st Legal'},
    { abbreviation: 'MILESTONE ALLOWABLE AMOUNT', name: '$400.00' },
    { abbreviation: 'CURRENT BILLABLE AMOUNT', name: '$500.00' },
    { abbreviation: 'AMOUNT THAT SHOULD HAVE ALREADY BEEN BILLED', name: '$0.00' },
  ];
}
