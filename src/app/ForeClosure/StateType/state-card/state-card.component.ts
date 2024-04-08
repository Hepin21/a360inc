import { Component ,EventEmitter,OnInit, Output} from '@angular/core';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
@Component({
  selector: 'app-state-card',
  templateUrl: './state-card.component.html',
  styleUrls: ['./state-card.component.scss']
})
export class StateCardComponent implements OnInit{
  states: any[] = [];
  @Output() stateSelected: EventEmitter<number> = new EventEmitter<number>();
  constructor(private statetypeService:StateService ) { }
  selectState(fullname: string, id: number) {
    this.statetypeService.setSelectedState(fullname);
    this.statetypeService.setSelectedStateID(id);
    // this.stateSelected.emit(id); // Emit the selected state ID
  }
  ngOnInit(): void {
    this.loadStates();
  }
  loadStates(): void {
    this.statetypeService.getStateTypes().subscribe(
      (data: any[]) => {
        this.states = data;
      },
      (error) => {
        console.error('Error fetching Fee Schedules types:', error);
      }
    );
  }
}
