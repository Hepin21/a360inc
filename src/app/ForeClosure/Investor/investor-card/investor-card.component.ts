import { Component } from '@angular/core';
import { InvestorService } from 'src/app/DilComponent/conventional/investor.service';

@Component({
  selector: 'app-investor-card',
  templateUrl: './investor-card.component.html',
  styleUrls: ['./investor-card.component.scss']
})
export class InvestorCardComponent {
  investors=[{name:'FNMA'},{name:'FHLMC'},{name:'Other'},{name:'None'}];
  constructor(private investorService: InvestorService) { }
selectInvestor(investorName: string) {
  this.investorService.setSelectedInvestor(investorName);
}
ngOnInit(): void {
}
}
