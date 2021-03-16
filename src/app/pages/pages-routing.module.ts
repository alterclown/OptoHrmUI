import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HrmLoginComponent } from './hrm-login/hrm-login.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: '', component: HrmLoginComponent,children: [{path: '', component: HrmLoginComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
