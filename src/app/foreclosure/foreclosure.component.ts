import { Component } from '@angular/core';

@Component({
  selector: 'app-foreclosure',
  templateUrl: './foreclosure.component.html',
  styleUrls: ['./foreclosure.component.scss']
})
export class ForeclosureComponent {
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
