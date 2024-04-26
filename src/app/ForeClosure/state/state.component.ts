import { Component, EventEmitter, Output } from '@angular/core';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent {
  //This Code is Use for Header title Change
  headerTitle: string = 'Foreclosure Fee Schedule';

  
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); //
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  states: any[] = [];
  filteredStates: any[] = [];
  @Output() stateID: EventEmitter<number> = new EventEmitter<number>();
  constructor(private statetypeService: StateService) {}
  selectState(fullname: string, stateID: number) {
    this.statetypeService.setSelectedState(fullname);
    this.statetypeService.setSelectedStateID(stateID);
    // this.stateSelected.emit(stateID); // Emit the selected state ID
  }
  ngOnInit(): void {
    this.loadStates();
  }

  loadStates(): void {
    this.statetypeService.getStateTypes().subscribe(
      (data: any[]) => {
        this.states = data;
        this.filteredStates = data; // Initialize filteredStates with all states
      },
      (error) => {
        console.error('Error fetching Fee Schedules types:', error);
      }
    );
  }

  noStatesFound: boolean = false;

  searchStates(event: any): void {
    const query: string = (event.target as HTMLInputElement).value;
    if (query.trim() !== '') {
      // Filter states based on query
      this.filteredStates = this.states.filter((state) =>
        state.fullname.toLowerCase().includes(query.toLowerCase())
      );
      this.noStatesFound = this.filteredStates.length === 0; // Check if any states are found
    } else {
      // If query is empty, display all states
      this.filteredStates = this.states;
      this.noStatesFound = false; // Reset noStatesFound if query is empty
    }
  }
}
