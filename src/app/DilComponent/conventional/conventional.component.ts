import { Component } from '@angular/core';
import { LoanService } from '../conventional/loan.service';

@Component({
  selector: 'app-conventional',
  templateUrl: './conventional.component.html',
  styleUrls: ['./conventional.component.scss'],
})
export class ConventionalComponent {
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); //
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  selectedLoan: string = '';
  constructor(private LoanService: LoanService) {}
  ngOnInit(): void {
    this.LoanService.selectedLoan$.subscribe((loanName) => {
      this.selectedLoan = loanName;
    });
  }
  //This Code is Use for Header title Change
  headerTitle: string = 'DIL Fee Schedule';
}
