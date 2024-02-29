import { Component } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent {
  fees = [
    { abbreviation: 'TOTAl ALLOWABLE AMOUNT', name: '$400.00' },
    { abbreviation: 'ALLOWABLE%', name: '100% Completed' },
    // { abbreviation: 'AR', name: 'Arkansas' },
    { abbreviation: 'MILESTONE ALLOWABLE AMOUNT', name: '$400.00' },
    { abbreviation: 'CURRENT BILLABLE AMOUNT', name: '$500.00' },
    { abbreviation: 'AMOUNT THAT SHOULD HAVE ALREADY BEEN BILLED', name: '$0.00' },
    // { abbreviation: 'CA', name: 'California' }
  ];
}
