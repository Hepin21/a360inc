import { Component } from '@angular/core';

@Component({
  selector: 'app-dil',
  templateUrl: './dil.component.html',
  styleUrls: ['./dil.component.scss']
})
export class DILComponent {
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
    headerTitle: string = 'DIL Fee Schedule';
}
