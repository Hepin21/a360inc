import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
// import { FnmaComponent } from './DilComponent/fnma/fnma.component';
import { MileStoneComponent } from './DilComponent/mile-stone/mile-stone.component';
import { LoanComponent } from './ForeClosure/loan/loan.component';
import { MilestoneTypeComponent } from './ForeClosure/milestone-type/milestone-type.component';
import { InvestorTypeComponent } from './ForeClosure/investor-type/investor-type.component';
import { ClientTypeComponent } from './ForeClosure/client-type/client-type.component';
import { ForResultComponent } from './ForeClosure/for-result/for-result.component';
import { ForeClosureComponent } from './ForeClosure/fore-closure/fore-closure.component';
import { DilResultComponent } from './DilComponent/dil-result/dil-result.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { StateComponent } from './ForeClosure/state/state.component';
import { DILLoanComponent } from './DilComponent/dilloan/dilloan.component';
import { InvestorComponent } from './DilComponent/Investor/investor.component';
import { ClientComponent } from './DilComponent/client/client.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'app-side-nav', component: SideNavComponent },
  { path: 'app-header', component: HeaderComponent },
  { path: 'dilloan', component: DILLoanComponent },
  { path: 'state', component: StateComponent },
  { path: 'foreclosure', component: ForeClosureComponent },
  { path: 'dil-investor', component: InvestorComponent },
  { path: 'dil-result', component: DilResultComponent },
  { path: 'milestone', component: MileStoneComponent },
  { path: 'foremile', component: MilestoneTypeComponent },
  { path: 'investor', component: InvestorTypeComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'client', component: ClientTypeComponent },
  { path: 'fore-result', component: ForResultComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
