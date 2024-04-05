import { Component ,OnInit} from '@angular/core';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
@Component({
  selector: 'app-state-card',
  templateUrl: './state-card.component.html',
  styleUrls: ['./state-card.component.scss']
})
export class StateCardComponent implements OnInit{
  states: any[] = [];
  constructor(private StatetypeService:StateService ) { }
  selectState(statetypeName: string) {
    this.StatetypeService.setSelectedState(statetypeName);
  }
  ngOnInit(): void {
    this.loadStates();
  }
  loadStates(): void {
    this.StatetypeService.getStateTypes().subscribe(
      (data: any[]) => {
        this.states = data;
      },
      (error) => {
        console.error('Error fetching Fee Schedules types:', error);
      }
    );
  }
}
