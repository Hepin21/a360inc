import { Component } from '@angular/core';
import { InvestorService } from '../conventional/investor.service';

@Component({
  selector: 'app-conv-card',
  templateUrl: './conv-card.component.html',
  styleUrls: ['./conv-card.component.scss']
})
export class ConvCardComponent {
  investors=[{name:'FNMA'},{name:'FHLMC'},{name:'Other'},{name:'None'}];
constructor(private investorService: InvestorService) { }
selectInvestor(investorName: string) {
  this.investorService.setSelectedInvestor(investorName);
}
ngOnInit(): void {
}

}
