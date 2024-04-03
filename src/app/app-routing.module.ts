import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { DILComponent } from './DilComponent/dil/dil.component';
import { HomeComponent } from './home/home.component';
import { ConventionalComponent } from './DilComponent/conventional/conventional.component';
import { FnmaComponent } from './InvestorType/fnma/fnma.component';
import { MileStoneComponent } from './InvestorType/mile-stone/mile-stone.component';
import { LoanComponent } from './ForeClosure/LoanType/loan/loan.component';
import { MilestoneTypeComponent } from './ForeClosure/MileStone/milestone-type/milestone-type.component';
import { InvestorTypeComponent } from './ForeClosure/Investor/investor-type/investor-type.component';
import { ClientTypeComponent } from './ForeClosure/Client/client-type/client-type.component';
import { ForResultComponent } from './ForeClosure/for-result/for-result.component';
import { ForeClosureComponent } from './ForeClosure/fore-closure/fore-closure.component';
import { DilResultComponent } from './DilComponent/dil-result/dil-result.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FeeSchedulesComponent } from './fee-schedules/fee-schedules.component';
import { StateComponent } from './ForeClosure/StateType/state/state.component';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'app-side-nav', component: SideNavComponent },
  { path: 'app-header', component: HeaderComponent },
  { path: 'dil', component: DILComponent },
  { path: 'state', component: StateComponent },
  { path: 'foreclosure', component: ForeClosureComponent },
  { path: 'conventional', component: ConventionalComponent },
  { path: 'dil-result', component: DilResultComponent },
  { path: 'milestone', component: MileStoneComponent },
  { path: 'foremile', component: MilestoneTypeComponent },
  { path: 'investor', component: InvestorTypeComponent },
  { path: 'fnma', component: FnmaComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'client', component: ClientTypeComponent },
  { path: 'fore-result', component: ForResultComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
