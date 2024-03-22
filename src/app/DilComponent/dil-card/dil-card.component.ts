import { Component } from '@angular/core';
import {LoanService} from "../conventional/loan.service"
@Component({
  selector: 'app-dil-card',
  templateUrl: './dil-card.component.html',
  styleUrls: ['./dil-card.component.scss'],
  providers : [LoanService]
})
export class DilCardComponent {
  loans=[{name:'Conventional Insured/PMI'},{name:'FHA'},{name:"USDA"},{name:'VA'}];
constructor(private LoanService: LoanService) { }

selectLoan(loanName: string) {
  this.LoanService. setSelectedLoan(loanName);
}
     ngOnInit(): void {
     }

  // loans=[{name:'Conventional Insured/PMI'},{name:'FHA'},{name:"USDA"},{name:'VA'}];
  // sLoan: string[]=[];
  // getselectLoan(){
  //   this.sLoan = this.lservice.selectLoan()
  // }
  // constructor(private lservice: LoanService){

  // }
  //  toggleFullScreen() {
  //   if (!document.fullscreenElement) {
  //     document.documentElement.requestFullscreen(); // 
  //   } else {
  //     if (document.exitFullscreen) {
  //       document.exitFullscreen(); 
  //     }
  //   }
  // }
}
