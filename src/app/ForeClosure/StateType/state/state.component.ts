import { Component } from '@angular/core';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent {
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
