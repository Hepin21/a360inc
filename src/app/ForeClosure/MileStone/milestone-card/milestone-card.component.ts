import { Component } from '@angular/core';
import { MilestoneService } from '../../Services/milestone.service';

@Component({
  selector: 'app-milestone-card',
  templateUrl: './milestone-card.component.html',
  styleUrls: ['./milestone-card.component.scss'],
})
export class MilestoneCardComponent {
  milestones: any[] = [];
  constructor(private MilestoneService: MilestoneService) {}
  selectedMilestone(milestoneName: string) {
    this.MilestoneService.setSelectedMilestone(milestoneName);
  }
  ngOnInit(): void {
    this.loadInvestor();
  }
  loadInvestor(): void {
    this.MilestoneService.getMilestoneTypes().subscribe(
      (data: any[]) => {
        this.milestones = data;
      },
      (error) => {
        console.error('Error fetching Clients types:', error);
      }
    );
  }
}
