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
import { JobTitleComponent } from './job-title/job-title.component';
import { CreateJobTitleComponent } from './job-title/create-job-title/create-job-title.component';
import { UpdateJobTitleComponent } from './job-title/update-job-title/update-job-title.component';
import { JobTitleListComponent } from './job-title/job-title-list/job-title-list.component';
import { PaygradeComponent } from './paygrade/paygrade.component';
import { CreatePaygradeComponent } from './paygrade/create-paygrade/create-paygrade.component';
import { UpdatePaygradeComponent } from './paygrade/update-paygrade/update-paygrade.component';
import { EmploymentstatusComponent } from './employmentstatus/employmentstatus.component';
import { EmploymentstatusListComponent } from './employmentstatus/employmentstatus-list/employmentstatus-list.component';
import { CreateEmploymentStatusComponent } from './employmentstatus/create-employment-status/create-employment-status.component';
import { UpdateEmploymentStatusComponent } from './employmentstatus/update-employment-status/update-employment-status.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { CreateSkillComponent } from './skills/create-skill/create-skill.component';
import { UpdateSkillComponent } from './skills/update-skill/update-skill.component';
import { EducationComponent } from './education/education.component';
import { EducationListComponent } from './education/education-list/education-list.component';
import { CreateEducationComponent } from './education/create-education/create-education.component';
import { UpdateEducationComponent } from './education/update-education/update-education.component';
import { CertificationComponent } from './certification/certification.component';
import { CertificationListComponent } from './certification/certification-list/certification-list.component';
import { CreateCertificationComponent } from './certification/create-certification/create-certification.component';
import { UpdateCertificationComponent } from './certification/update-certification/update-certification.component';


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
    JobTitleComponent,
    CreateJobTitleComponent,
    UpdateJobTitleComponent,
    JobTitleListComponent,
    PaygradeComponent,
    CreatePaygradeComponent,
    UpdatePaygradeComponent,
    EmploymentstatusComponent,
    EmploymentstatusListComponent,
    CreateEmploymentStatusComponent,
    UpdateEmploymentStatusComponent,
    SkillsComponent,
    SkillListComponent,
    CreateSkillComponent,
    UpdateSkillComponent,
    EducationComponent,
    EducationListComponent,
    CreateEducationComponent,
    UpdateEducationComponent,
    CertificationComponent,
    CertificationListComponent,
    CreateCertificationComponent,
    UpdateCertificationComponent,
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
