import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  //* Fore Title
  @Input() title: string = 'Fee Schedules';
  @Output() titleChanged: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {}

  //* Fore Full Screen
  fullscreen: boolean = false;
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
