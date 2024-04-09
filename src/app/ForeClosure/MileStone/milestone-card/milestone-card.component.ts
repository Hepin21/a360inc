import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MilestoneService } from '../../Services/milestone.service';

@Component({
  selector: 'app-milestone-card',
  templateUrl: './milestone-card.component.html',
  styleUrls: ['./milestone-card.component.scss'],
})
export class MilestoneCardComponent {
  milestones: any[] = [];
  @Output() milestoneID: EventEmitter<number> = new EventEmitter<number>();

  @Input() stateID: number = 0;
  @Input() foreclosureTypeId: number = 0;
  @Input() loanID: number = 0;
  @Input() investorID: number = 0;
  @Input() clientID: number = 0;

  constructor(private MilestoneService: MilestoneService) {}
  selectedMilestone(milestoneName: string, milestoneID: number) {
    this.MilestoneService.setSelectedMilestone(milestoneName);
    this.MilestoneService.setSelectedMilestoneID(milestoneID);
  }
  ngOnInit(): void {
    this.loadInvestor();
  }
  loadInvestor(): void {
    this.MilestoneService.getMilestoneTypes(
      this.stateID,
      this.foreclosureTypeId,
      this.loanID,
      this.investorID,
      this.clientID
    ).subscribe(
      (data: any[]) => {
        this.milestones = data;
      },
      (error) => {
        console.error('Error fetching Clients types:', error);
      }
    );
  }
}
