import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InvestorService } from '../../Services/investor.service';
import { LoanService } from '../../Services/loan.service';

@Component({
  selector: 'app-conv-card',
  templateUrl: './conv-card.component.html',
  styleUrls: ['./conv-card.component.scss'],
})
export class ConvCardComponent implements OnInit {
  investors: any[] = [];
  @Output() investorID: EventEmitter<number> =
    new EventEmitter<number>();

  @Input() loanID: number = 0;
  constructor(private investorService: InvestorService) {}
  selectInvestor(investorName: string, investorID:number) {
    this.investorService.setSelectedInvestor(investorName);
    this.investorService.setSelectedInvestorID(investorID);
  }
  ngOnInit(): void {
    this.loadInvestors();
  }
  loadInvestors(): void {
    this.investorService.getInvestorTypes(this.loanID).subscribe(
      (data: any[]) => {
        this.investors = data;
      },
      (error) => {
        console.error('Error fetching investors types:', error);
      }
    );
  }
}
