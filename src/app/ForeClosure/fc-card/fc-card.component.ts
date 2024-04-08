import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ForeclosuretypeService } from '../Services/foreclosuretype.service';

@Component({
  selector: 'app-fc-card',
  templateUrl: './fc-card.component.html',
  styleUrls: ['./fc-card.component.scss'],
})
export class FcCardComponent implements OnInit {
  foretypes: any[] = [];
  @Input() stateID: number = 0;
  @Output() fcType: EventEmitter<number> = new EventEmitter<number>();
  constructor(private ForeclosuretypeService: ForeclosuretypeService) {}
  selectForeClosure(foreclosuretypeName: string, stateID: number ) {
    this.ForeclosuretypeService.setSelectedForeclosuretype(foreclosuretypeName);
    this.ForeclosuretypeService.setSelectedForeclosuretype(foreclosuretypeName);
    this.stateID = stateID;
  }
  ngOnInit(): void {
    this.loadF_CType();
  }
  loadF_CType(): void {
    this.ForeclosuretypeService.getForeclosureTypes(this.stateID).subscribe(
      (data: any[]) => {
        this.foretypes = data;
      },
      (error) => {
        console.error('Error fetching Foreclosuretype types:', error);
      }
    );
  }
}

// import { Component, Input, OnInit } from '@angular/core';
// import { ForeclosuretypeService } from '../Services/foreclosuretype.service';

// @Component({
//   selector: 'app-fc-card',
//   templateUrl: './fc-card.component.html',
//   styleUrls: ['./fc-card.component.scss'],
// })
// export class FcCardComponent implements OnInit {
//   foretypes: any[] = [];
//   @Input() stateID: number = 0; // Initialize with a default value

//   constructor(private foreclosuretypeService: ForeclosuretypeService) {}

//   selectForeClosure(stateID: number) {
//     this.stateID = stateID; // Update the stateID property
//     // this.foreclosuretypeService.setSelectedForeclosuretype(stateID.toString()); // Optional: You can pass stateID to service if needed
//     // this.loadMilestones(); // Reload milestones with the new stateID
//   }

//   ngOnInit(): void {
//     this.loadMilestones();
//   }

//   loadMilestones(): void {
//     this.foreclosuretypeService.getForeclosureTypes(this.stateID).subscribe(
//       (data: any[]) => {
//         this.foretypes = data;
//       },
//       (error) => {
//         console.error('Error fetching Foreclosuretype types:', error);
//       }
//     );
//   }
// }
