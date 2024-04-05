import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from '../ForeClosure/Services/loan.service';

@Component({
  selector: 'app-fee-schedules',
  templateUrl: './fee-schedules.component.html',
  styleUrls: ['./fee-schedules.component.scss'],
})
export class FeeSchedulesComponent {
  constructor(
    private router: Router,
    private loanService: LoanService,
  ) {}

  fetchDILLoanTypes(): void {
    // Navigate to the DIL route
    this.router.navigate(['/dil']);

    // Call the method to fetch DIL loan types
    this.loanService.getLoanTypes().subscribe(
      (data) => {
        // this.sharedDataService.setLoanTypes(data);
        console.log(data);
      },
      (error) => {
        // Handle the error
        console.error('Error fetching DIL loan types:', error);
      }
    );
  }
}
