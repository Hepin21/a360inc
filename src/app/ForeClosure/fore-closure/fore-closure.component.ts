import { Component } from '@angular/core';
import { StateService } from 'src/app/ForeClosure/Services/state.service';
@Component({
  selector: 'app-fore-closure',
  templateUrl: './fore-closure.component.html',
  styleUrls: ['./fore-closure.component.scss'],
})
export class ForeClosureComponent {
  // value: string | undefined;
  //* This is For the Progress Panel
  selectedState:string='';
  constructor(private SateService: StateService){}
  ngOnInit():void{
    this.SateService.selectedState$.subscribe(stateName => {
      this.selectedState = stateName;
    });
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

  //This Code is Use for Header title Change
  headerTitle: string = 'Foreclosure Fee Schedule';

  // onTitleChanged(newTitle: string) {
  //   this.headerTitle = newTitle;
  // }
}
