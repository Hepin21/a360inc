import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvestorService } from '../../Services/investor.service';

@Component({
  selector: 'app-investor-card',
  templateUrl: './investor-card.component.html',
  styleUrls: ['./investor-card.component.scss'],
})
export class InvestorCardComponent {
  investors: any[] = [];
  @Output() investorID: EventEmitter<number> = new EventEmitter<number>();

  @Input() stateID: number = 0;
  @Input() foreclosureTypeId: number = 0;
  @Input() loanID: number = 0;

  constructor(private investorService: InvestorService) {}
  selectInvestor(investorName: string, investorID:number) {
    this.investorService.setSelectedInvestor(investorName);
    this.investorService.setSelectedInvestorId(investorID);
  }
  ngOnInit(): void {
    this.loadInvestor();
  }
  loadInvestor(): void {
    this.investorService.getInvestorTypes(this.stateID, this.foreclosureTypeId, this.loanID).subscribe(
      (data: any[]) => {
        this.investors = data;
      },
      (error) => {
        console.error('Error fetching Loans types:', error);
      }
    );
  }
}
