import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
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
import { ConventionalComponent } from './DilComponent/conventional/conventional.component';
import { ConvCardComponent } from './DilComponent/conv-card/conv-card.component';
import { FnmaComponent } from './InvestorType/fnma/fnma.component';
import { ForeClosureComponent } from './fore-closure/fore-closure.component';
import { ClientNameComponent } from './InvestorType/client-name/client-name.component';
import { MileStoneComponent } from './InvestorType/mile-stone/mile-stone.component';
import { MileCardComponent } from './InvestorType/mile-card/mile-card.component';
import { DilResultComponent } from './Result/dil-result/dil-result.component';
import { ResultCardComponent } from './Result/result-card/result-card.component';
import { ClientTypeComponent } from './ForeClosure/client-type/client-type.component';
import { LoanCardComponent } from './ForeClosure/LoanType/loan-card/loan-card.component';
import { LoanComponent } from './ForeClosure/LoanType/loan/loan.component';
import { InvestorCardComponent } from './ForeClosure/Investor/investor-card/investor-card.component';
import { InvestorTypeComponent } from './ForeClosure/Investor/investor-type/investor-type.component';
import { ClientCardComponent } from './ForeClosure/client-card/client-card.component';
import { MilestoneCardComponent } from './ForeClosure/MileStone/milestone-card/milestone-card.component';
import { MilestoneTypeComponent } from './ForeClosure/MileStone/milestone-type/milestone-type.component';
import { ForResultComponent } from './ForeClosure/for-result/for-result.component';
import { PanelModule } from 'primeng/panel';
import { ForResultCardComponent } from './ForeClosure/for-result-card/for-result-card.component';



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    LoanComponent,
    LoginComponent,
    FeeSchedulesComponent,
    DILComponent,
    LookupCardComponent,
    ProgressQueueComponent,
    DilCardComponent,
    HomeComponent,
    FcCardComponent,
    ConventionalComponent,
    ConvCardComponent,
    FnmaComponent,
    ForeClosureComponent,
    ClientNameComponent,
    MileStoneComponent,
    MileCardComponent,
    DilResultComponent,
    ResultCardComponent,
    ClientTypeComponent,
    LoanCardComponent,
    InvestorCardComponent,
    InvestorTypeComponent,
    ClientCardComponent,
    MilestoneCardComponent,
    MilestoneTypeComponent,
    ForResultComponent,
    ForResultCardComponent,
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
    InputTextModule,
    AccordionModule,
    ToastModule,
    MenuModule,
    PanelModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
