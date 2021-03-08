import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CompanyComponent } from './company/company.component';
import { DesignationComponent } from './designation/designation.component';
import { DepartmentComponent } from './department/department.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { UpdateCompanyComponent } from './company/update-company/update-company.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonSharedModule } from '../../common.module';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { CreateDesignationComponent } from './designation/create-designation/create-designation.component';
import { DesignationListComponent } from './designation/designation-list/designation-list.component';
import { UpdateDepartmentComponent } from './department/update-department/update-department.component';
import { UpdateDesignationComponent } from './designation/update-designation/update-designation.component';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    DesignationComponent,
    DepartmentComponent,
    CreateCompanyComponent,
    UpdateCompanyComponent,
    CreateDepartmentComponent,
    DepartmentListComponent,
    CreateDesignationComponent,
    DesignationListComponent,
    UpdateDepartmentComponent,
    UpdateDesignationComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NzButtonModule,
    NzTableModule,
    ReactiveFormsModule,
    NzFormModule,
    CommonSharedModule
  ]
})
export class SharedModule { }
