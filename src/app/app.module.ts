import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { PasswordModule } from 'primeng/password';
import { ToolbarModule } from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { FeeSchedulesComponent } from './fee-schedules/fee-schedules.component';
import { DILComponent } from './DilComponent/Loan/dil/dil.component';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DilCardComponent } from './DilComponent/Loan/dil-card/dil-card.component';
import { HomeComponent } from './home/home.component';
import { FcCardComponent } from './ForeClosure/fc-card/fc-card.component';
import { ConventionalComponent } from './DilComponent/Investor/conventional/conventional.component';
import { ConvCardComponent } from './DilComponent/Investor/conv-card/conv-card.component';
import { FnmaComponent } from './DilComponent/Client/fnma/fnma.component';
import { ForeClosureComponent } from './ForeClosure/fore-closure/fore-closure.component';
import { ClientNameComponent } from './DilComponent/Client/client-name/client-name.component';
import { MileStoneComponent } from './DilComponent/Milestone/mile-stone/mile-stone.component';
import { MileCardComponent } from './DilComponent/Milestone/mile-card/mile-card.component';
import { ClientTypeComponent } from './ForeClosure/Client/client-type/client-type.component';
import { LoanCardComponent } from './ForeClosure/LoanType/loan-card/loan-card.component';
import { LoanComponent } from './ForeClosure/LoanType/loan/loan.component';
import { InvestorCardComponent } from './ForeClosure/Investor/investor-card/investor-card.component';
import { InvestorTypeComponent } from './ForeClosure/Investor/investor-type/investor-type.component';
import { ClientCardComponent } from './ForeClosure/Client/client-card/client-card.component';
import { MilestoneCardComponent } from './ForeClosure/MileStone/milestone-card/milestone-card.component';
import { MilestoneTypeComponent } from './ForeClosure/MileStone/milestone-type/milestone-type.component';
import { ForResultComponent } from './ForeClosure/for-result/for-result.component';
import { PanelModule } from 'primeng/panel';
import { ForResultCardComponent } from './ForeClosure/for-result-card/for-result-card.component';
import { createCustomElement } from '@angular/elements';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { CheckboxModule } from 'primeng/checkbox';
import { ResultCardComponent } from './DilComponent/result-card/result-card.component';
import { DilResultComponent } from './DilComponent/dil-result/dil-result.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StateComponent } from './ForeClosure/StateType/state/state.component';
import { StateCardComponent } from './ForeClosure/StateType/state-card/state-card.component';
import { AddTokenInterceptor } from './Interceptor/add-token.interceptor';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    LoanComponent,
    FeeSchedulesComponent,
    DILComponent,
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
    LoginComponent,
    RegistrationComponent,
    StateComponent,
    StateCardComponent,
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    CheckboxModule,
    FormsModule,
    PasswordModule,
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
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  // bootstrap: [],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
})
export class AppModule {}
// export class AppModule implements DoBootstrap{

//   constructor(private injector: Injector){}

//   ngDoBootstrap(appRef : ApplicationRef): void {
//       const webComp = createCustomElement(DilResultComponent,{injector: this.injector});
//       customElements.define('add-webc', webComp);   //*Use for Create and Register Custom Web Component     direct ng build and compile this component
//       // const showTodos = createCustomElement(TodosComponent,{injector: this.injector});
//       // customElements.define('show-todos', showTodos);   //*Use for Create and Register Custom Web Component
//       // const about = createCustomElement(AboutComponent,{injector: this.injector});
//       // customElements.define('about-todos', about);   //*Use for Create and Register Custom Web Component
//   }
//  }
