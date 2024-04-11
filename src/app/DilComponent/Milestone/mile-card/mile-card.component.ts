import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MilestoneService } from 'src/app/DilComponent/Services/milestone.service';

@Component({
  selector: 'app-mile-card',
  templateUrl: './mile-card.component.html',
  styleUrls: ['./mile-card.component.scss'],
})
export class MileCardComponent implements OnInit {
  milestones: any[] = [];
  @Output() milestoneID: EventEmitter<number> = new EventEmitter<number>();

  @Input() loanID: number = 0;
  @Input() investorID: number = 0;
  @Input() clientID: number = 0;
  constructor(private MilestoneService: MilestoneService) {}
  selectedMilestone(milestoneName: string, milestoneID:number) {
    this.MilestoneService.setSelectedMilestone(milestoneName);
    this.MilestoneService.setSelectedMilestoneId(milestoneID);
  }
  ngOnInit(): void {
    this.loadMilestones();
  }
  loadMilestones(): void {
    this.MilestoneService.getMilestoneTypes(this.loanID, this.investorID, this.clientID).subscribe(
      (data: any[]) => {
        this.milestones = data;
      },
      (error) => {
        console.error('Error fetching milestones types:', error);
      }
    );
  }
}
