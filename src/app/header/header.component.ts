import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string = 'Fee Schedules';
  @Output() titleChanged: EventEmitter<string> = new EventEmitter<string>();
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

  @Input() size: 'small' | 'extra-small' = 'small';


  tabItems: MenuItem[];

  constructor() {
    this.tabItems = [
      {label: 'Tab 1', icon: 'pi pi-home', routerLink: ['/tab1']},
      {label: 'Tab 2', icon: 'pi pi-user', routerLink: ['/tab2']},
      {label: 'Tab 3', icon: 'pi pi-calendar', routerLink: ['/tab3']}
      // Add more tabs as needed
    ];
  }
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e: any): void {
        this.sidebarRef.close(e);
    }
  sidebarVisible: boolean = false;
  onTitleChanged(newTitle: string) {
    this.titleChanged.emit(newTitle);
  }
}
