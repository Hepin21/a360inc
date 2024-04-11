import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilteredService } from 'src/app/ForeClosure/Services/filtered.service';
import { MilestoneService } from '../Services/milestone.service';
@Component({
  selector: 'app-for-result-card',
  templateUrl: './for-result-card.component.html',
  styleUrls: ['./for-result-card.component.scss'],
})
export class ForResultCardComponent {
  fees: any[] = [];
  // @Output() resultID: EventEmitter<number> = new EventEmitter<number>();

  @Input() stateID: number = 0;
  @Input() foreclosureTypeId: number = 0;
  @Input() loanID: number = 0;
  @Input() investorID: number = 0;
  @Input() clientID: number = 0;
  @Input() milestoneID: number = 0;
  selectedMilestone: string = '';
  constructor(
    private filteredService: FilteredService,
    private MilestoneService: MilestoneService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.MilestoneService.selectedMilestone$.subscribe((milestoneName) => {
      this.selectedMilestone = milestoneName;
    });
  }
  loadData(): void {
    this.filteredService
      .getFilteredData(
        this.stateID,
        this.foreclosureTypeId,
        this.loanID,
        this.investorID,
        this.clientID,
        this.milestoneID
      )
      .subscribe(
        (data: any[]) => {
          this.fees = data;
        },
        (error) => {
          console.error('Error fetching Foreclosuretype types:', error);
        }
      );
  }
}
