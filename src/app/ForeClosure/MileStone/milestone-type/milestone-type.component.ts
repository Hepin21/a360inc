import { Component } from '@angular/core';

@Component({
  selector: 'app-milestone-type',
  templateUrl: './milestone-type.component.html',
  styleUrls: ['./milestone-type.component.scss'],
})
export class MilestoneTypeComponent {
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); //
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  //This Code is Use for Header title Change
  headerTitle: string = 'Foreclosure Fee Schedule';
}
