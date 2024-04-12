import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilteredService } from '../Services/filtered.service';
import { MilestoneService } from '../Services/milestone.service';
@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent {
  dils: any; // Change type to any for object
  // @Output() milestoneID: EventEmitter<number> = new EventEmitter<number>();

  @Input() loanID: number = 0;
  @Input() investorID: number = 0;
  @Input() clientID: number = 0;
  @Input() milestoneID: number = 0;
  selectedMilestone: string = '';

  constructor(
    private filteredService: FilteredService,
    private MilestoneService: MilestoneService
  ) {}
  selectForeClosure(resultData: string) {}
  ngOnInit(): void {
    this.DilloadData();
    this.MilestoneService.selectedMilestone$.subscribe((milestoneName) => {
      this.selectedMilestone = milestoneName;
    });
  }
  DilloadData(): void {
    this.filteredService
      .getDilFilteredData(
        this.loanID,
        this.investorID,
        this.clientID,
        this.milestoneID
      )
      .subscribe(
        (data: any) => {
          this.dils = data;
        },
        (error) => {
          console.error('Error fetching Foreclosuretype types:', error);
        }
      );
  }
}
