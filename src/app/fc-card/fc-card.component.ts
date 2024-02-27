import { Component } from '@angular/core';
import { StateService } from './state.service'

@Component({
  selector: 'app-fc-card',
  templateUrl: './fc-card.component.html',
  styleUrls: ['./fc-card.component.scss'],
  providers : [StateService]
})
export class FcCardComponent {

  sState: string[]=[];
  getselectState(){
    this.sState = this.lservice.selectState()
  }
  constructor(private lservice: StateService){

  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); // 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }
    }
  }
}
