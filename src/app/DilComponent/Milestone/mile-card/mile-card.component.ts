import { Component, OnInit } from '@angular/core';
import { MilestoneService } from 'src/app/DilComponent/Services/milestone.service';

@Component({
  selector: 'app-mile-card',
  templateUrl: './mile-card.component.html',
  styleUrls: ['./mile-card.component.scss'],
})
export class MileCardComponent implements OnInit {
  milestones: any[] = [];
  constructor(private MilestoneService: MilestoneService) {}
  selectedMilestone(milestoneName: string) {
    this.MilestoneService.setSelectedMilestone(milestoneName);
  }
  ngOnInit(): void {
    this.loadMilestones();
  }
  loadMilestones(): void {
    this.MilestoneService.getMilestoneTypes().subscribe(
      (data: any[]) => {
        this.milestones = data;
      },
      (error) => {
        console.error('Error fetching milestones types:', error);
      }
    );
  }
}
