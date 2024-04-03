import { Component } from '@angular/core';
@Component({
  selector: 'app-fore-closure',
  templateUrl: './fore-closure.component.html',
  styleUrls: ['./fore-closure.component.scss'],
})
export class ForeClosureComponent {
  value: string | undefined;

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
