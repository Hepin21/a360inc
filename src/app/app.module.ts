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
import { HomeComponent } from './home/home.component';
// import { ConventionalComponent, InvestorComponent } from './DilComponent/Investor/conventional/conventional.component';
import { ClientComponent } from './DilComponent/client/client.component';
import { ForeClosureComponent } from './ForeClosure/fore-closure/fore-closure.component';
import { MileStoneComponent } from './DilComponent/mile-stone/mile-stone.component';
import { ClientTypeComponent } from './ForeClosure/client-type/client-type.component';
import { LoanComponent } from './ForeClosure/loan/loan.component';
import { InvestorTypeComponent } from './ForeClosure/investor-type/investor-type.component';
import { MilestoneTypeComponent } from './ForeClosure/milestone-type/milestone-type.component';
import { ForResultComponent } from './ForeClosure/for-result/for-result.component';
import { PanelModule } from 'primeng/panel';
import { ForResultCardComponent } from './ForeClosure/for-result-card/for-result-card.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ResultCardComponent } from './DilComponent/result-card/result-card.component';
import { DilResultComponent } from './DilComponent/dil-result/dil-result.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StateComponent } from './ForeClosure/state/state.component';
import { AddTokenInterceptor } from './Interceptor/add-token.interceptor';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DILLoanComponent } from './DilComponent/dilloan/dilloan.component';
import { InvestorComponent } from './DilComponent/Investor/investor.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    LoanComponent,
    FeeSchedulesComponent,
    DILLoanComponent,
    HomeComponent,
    InvestorComponent,
    ClientComponent,
    ForeClosureComponent,
    MileStoneComponent,
    DilResultComponent,
    ResultCardComponent,
    ClientTypeComponent,
    InvestorTypeComponent,
    MilestoneTypeComponent,
    ForResultComponent,
    ForResultCardComponent,
    LoginComponent,
    RegistrationComponent,
    StateComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CheckboxModule,
    FormsModule,
    ScrollPanelModule,
    PasswordModule,
    AppRoutingModule,
    RadioButtonModule,
    ButtonModule,
    ProgressSpinnerModule,
    SidebarModule,
    BadgeModule,
    ToolbarModule,
    AvatarGroupModule,
    SkeletonModule,
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
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true,
    },
    MessageService,
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
