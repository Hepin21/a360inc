import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { ForeclosureComponent } from './foreclosure/foreclosure.component';
import { DILComponent } from './dil/dil.component';
import { LookupCardComponent } from './lookup-card/lookup-card.component';
import { HomeComponent } from './home/home.component';
import { ForeTypeComponent } from './foreclosure/fore-type/fore-type.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-side-nav', component: SideNavComponent },
  { path: 'app-header', component: HeaderComponent },
  { path: 'dil', component: DILComponent },
  { path: 'foreclosure', component: ForeclosureComponent },
  { path: 'foretype', component: ForeTypeComponent },
  { path: 'app-lookup-card', component: LookupCardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
