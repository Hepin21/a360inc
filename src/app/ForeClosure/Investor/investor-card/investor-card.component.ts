import { Component } from '@angular/core';
import { InvestorService } from '../../Services/investor.service';

@Component({
  selector: 'app-investor-card',
  templateUrl: './investor-card.component.html',
  styleUrls: ['./investor-card.component.scss'],
})
export class InvestorCardComponent {
  investors: any[] = [];
  constructor(private investorService: InvestorService) {}
  selectInvestor(investorName: string) {
    this.investorService.setSelectedInvestor(investorName);
  }
  ngOnInit(): void {
    this.loadInvestor();
  }
  loadInvestor(): void {
    this.investorService.getInvestorTypes().subscribe(
      (data: any[]) => {
        this.investors = data;
      },
      (error) => {
        console.error('Error fetching Loans types:', error);
      }
    );
  }
}
