import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilteredService } from '../Services/filtered.service';
@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent {
  dils: any = {}; // Change type to any for object
  // @Output() milestoneID: EventEmitter<number> = new EventEmitter<number>();

  @Input() loanID: number = 0;
  @Input() investorID: number = 0;
  @Input() clientID: number = 0;
  @Input() milestoneID: number = 0;
  constructor(private filteredService:FilteredService ) { }
  selectForeClosure(resultData: string) {
  }
  ngOnInit(): void {
    this.DilloadData();
  }
  DilloadData(): void {
    this.filteredService.getDilFilteredData(this.loanID, this.investorID, this.clientID, this.milestoneID).subscribe(
      (data: any) => {
        this.dils = data;
      },
      (error) => {
        console.error('Error fetching Foreclosuretype types:', error);
      }
    );
  }
}