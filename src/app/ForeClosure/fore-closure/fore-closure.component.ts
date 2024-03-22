import { Component, Input } from '@angular/core';
import { StateService } from 'src/app/Services/state.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-fore-closure',
  templateUrl: './fore-closure.component.html',
  styleUrls: ['./fore-closure.component.scss'],
})
export class ForeClosureComponent {
  value: string | undefined;

  states = [
    { abbreviation: 'AK', name: 'Alaska' },
    { abbreviation: 'AL', name: 'Alabama' },
    { abbreviation: 'AR', name: 'Arkansas' },
    { abbreviation: 'AZ', name: 'Arizona' },
    { abbreviation: 'CA', name: 'California' },
  ];

  constructor(private StateService: StateService) {}
  selectState(stateName: string) {
    this.StateService.setSelectedState(stateName);
  }
  ngOnInit(): void {}

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

  // onTitleChanged(newTitle: string) {
  //   this.headerTitle = newTitle;
  // }
}
