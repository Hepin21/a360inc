import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';
import { LoginComponent } from './login/login.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { FeeSchedulesComponent } from './fee-schedules/fee-schedules.component';
import { ForeclosureComponent } from './foreclosure/foreclosure.component';
import { DILComponent } from './dil/dil.component';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { LookupCardComponent } from './lookup-card/lookup-card.component';
import { StepsModule } from 'primeng/steps';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ProgressQueueComponent } from './progress-queue/progress-queue.component';
import { DilCardComponent } from './dil-card/dil-card.component';
import { HomeComponent } from './home/home.component';
import { FcCardComponent } from './fc-card/fc-card.component';
import { ForeTypeComponent } from './foreclosure/fore-type/fore-type.component';



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    LoginComponent,
    FeeSchedulesComponent,
    ForeclosureComponent,
    DILComponent,
    LookupCardComponent,
    ProgressQueueComponent,
    DilCardComponent,
    HomeComponent,
    FcCardComponent,
    ForeTypeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RadioButtonModule,
    ButtonModule,
    SidebarModule,
    BadgeModule,
    ToolbarModule,
    AvatarGroupModule,
    AvatarModule,
    DividerModule,
    MenubarModule,
    CardModule,
    StepsModule,
    AccordionModule,
    ToastModule,
    MenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
