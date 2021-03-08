import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HrmLoginComponent } from './hrm-login/hrm-login.component';
import { CommonSharedModule } from '../common.module';
import { HrmRoutingModule } from '../modules/hrm/hrm-routing.module';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    DashboardComponent,
    HrmLoginComponent
  ],
  imports: [
    CommonModule,
    HrmRoutingModule,
    CommonSharedModule,
    PagesRoutingModule
  ],
})
export class PagesModule { }
