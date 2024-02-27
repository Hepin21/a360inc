import { Component } from '@angular/core';
import { MilestoneService } from 'src/app/Services/milestone.service';

@Component({
  selector: 'app-milestone-card',
  templateUrl: './milestone-card.component.html',
  styleUrls: ['./milestone-card.component.scss']
})
export class MilestoneCardComponent {
  milestones=[{name:'Closes Prior to Completion'},
    {name:'DIL Completed'}];
   constructor(private MilestoneService: MilestoneService) { }
   selectedMilestone(milestoneName:string){
      this.MilestoneService.setSelectedMilestone(milestoneName);
    
   }
     // clientName = this.clients[0].name;
     //  setClient(client) {
     //   this.clientName = client.name;
     // }
  
     ngOnInit(): void {
     }
}
