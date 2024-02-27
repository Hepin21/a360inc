import { Component } from '@angular/core';
import { MilestoneService } from 'src/app/Services/milestone.service';

@Component({
  selector: 'app-mile-card',
  templateUrl: './mile-card.component.html',
  styleUrls: ['./mile-card.component.scss']
})
export class MileCardComponent {
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
