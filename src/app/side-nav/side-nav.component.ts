import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
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
}

