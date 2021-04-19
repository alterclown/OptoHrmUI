import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HrmLoginComponent } from './hrm-login/hrm-login.component';
import { CommonSharedModule } from '../common.module';
import { HrmRoutingModule } from '../modules/hrm/hrm-routing.module';
import { AppModule } from '../app.module';
import { CommonComponent } from './common/common.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HrmLoginComponent,
    CommonComponent
  ],
  imports: [
    CommonModule,
    HrmRoutingModule,
    CommonSharedModule,
    PagesRoutingModule
  ],
})
export class PagesModule { }
