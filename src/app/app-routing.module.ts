import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { DILComponent } from './DilComponent/Loan/dil/dil.component';
import { HomeComponent } from './home/home.component';
import { ConventionalComponent } from './DilComponent/Investor/conventional/conventional.component';
import { FnmaComponent } from './DilComponent/Client/fnma/fnma.component';
import { MileStoneComponent } from './DilComponent/Milestone/mile-stone/mile-stone.component';
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

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'app-side-nav', component: SideNavComponent },
  { path: 'app-header', component: HeaderComponent },
  { path: 'dilloan', component: DILComponent },
  { path: 'state', component: StateComponent },
  { path: 'foreclosure', component: ForeClosureComponent },
  { path: 'conventional', component: ConventionalComponent },
  { path: 'dil-result', component: DilResultComponent },
  { path: 'milestone', component: MileStoneComponent },
  { path: 'foremile', component: MilestoneTypeComponent },
  { path: 'investor', component: InvestorTypeComponent },
  { path: 'clients', component: FnmaComponent },
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
