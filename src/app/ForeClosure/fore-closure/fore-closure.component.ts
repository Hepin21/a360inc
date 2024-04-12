// import { Component } from '@angular/core';
// import { StateService } from 'src/app/ForeClosure/Services/state.service';
// @Component({
//   selector: 'app-fore-closure',
//   templateUrl: './fore-closure.component.html',
//   styleUrls: ['./fore-closure.component.scss'],
// })
// export class ForeClosureComponent {
//   // value: string | undefined;
//   //* This is For the Progress Panel
//   selectedState:string='';
//   selectedStateID: number = 0;

//   constructor(private stateService: StateService){}
//   ngOnInit():void{
//     this.stateService.selectedState$.subscribe(stateName => {
//       this.selectedState = stateName;
//     });
//     this.stateService.selectedStateId$.subscribe(stateID => {
//       this.selectedStateID = stateID;
//     });
//   }
//   toggleFullScreen() {
//     if (!document.fullscreenElement) {
//       document.documentElement.requestFullscreen(); //
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       }
//     }
//   }

//   //This Code is Use for Header title Change
//   headerTitle: string = 'Foreclosure Fee Schedule';

//   // onTitleChanged(newTitle: string) {
//   //   this.headerTitle = newTitle;
//   // }
// }


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ForeclosuretypeService } from '../Services/foreclosuretype.service';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-fore-closure',
  templateUrl: './fore-closure.component.html',
  styleUrls: ['./fore-closure.component.scss'],
})
export class ForeClosureComponent implements OnInit {
  selectedState:string='';
  selectedStateID: number = 0;
  headerTitle: string = 'Foreclosure Fee Schedule';
  foretypes: any[] = [];
  filteredForetypes: any[] = [];

  constructor(
    private foreclosuretypeService: ForeclosuretypeService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.stateService.selectedState$.subscribe(stateName => {
      this.selectedState = stateName;
    });
    this.stateService.selectedStateId$.subscribe(stateID => {
      this.selectedStateID = stateID;
      this.loadF_CType();
    });
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  loadF_CType(): void {
    this.foreclosuretypeService.getForeclosureTypes(this.selectedStateID).subscribe(
      (data: any[]) => {
        this.foretypes = data;
        this.filteredForetypes = data;
      },
      (error) => {
        console.error('Error fetching Foreclosuretype types:', error);
      }
    );
  }
  selectForeClosure(foreclosuretypeName: string, foreclosureTypeId: number) {
    this.foreclosuretypeService.setSelectedForeclosuretype(foreclosuretypeName);
    this.foreclosuretypeService.setSelectedF_CID(foreclosureTypeId);
  }
  
  //* Search bar Logic
  noForeClosureTypeFound: boolean = false;

  searchForetypes(event: any): void {
    const query: string = (event.target as HTMLInputElement).value;
    if (query.trim() !== '') {
      // Filter states based on query
      this.filteredForetypes = this.foretypes.filter((foretype) =>
        foretype.type.toLowerCase().includes(query.toLowerCase())
      );
      this.noForeClosureTypeFound = this.filteredForetypes.length === 0; // Check if any states are found
    } else {
      // If query is empty, display all states
      this.filteredForetypes = this.foretypes;
      this.noForeClosureTypeFound = false; // Reset noStatesFound if query is empty
    }
  }
}
