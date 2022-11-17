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
import { LanguageComponent } from './language/language.component';
import { LanguageListComponent } from './language/language-list/language-list.component';
import { CreateLanguageComponent } from './language/create-language/create-language.component';
import { UpdateLanguageComponent } from './language/update-language/update-language.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { CreateLeaveTypeComponent } from './leave-type/create-leave-type/create-leave-type.component';
import { UpdateLeaveTypeComponent } from './leave-type/update-leave-type/update-leave-type.component';
import { LeaveTypeListComponent } from './leave-type/leave-type-list/leave-type-list.component';
import { WorkWeekComponent } from './work-week/work-week.component';
import { WorkWeekListComponent } from './work-week/work-week-list/work-week-list.component';
import { CreateWorkWeekComponent } from './work-week/create-work-week/create-work-week.component';
import { UpdateWorkWeekComponent } from './work-week/update-work-week/update-work-week.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { HolidayListComponent } from './holidays/holiday-list/holiday-list.component';
import { CreateHolidayComponent } from './holidays/create-holiday/create-holiday.component';
import { UpdateHolidayComponent } from './holidays/update-holiday/update-holiday.component';
import { ExpenseComponent } from './expense/expense.component';
import { CreateExpenseComponent } from './expense/create-expense/create-expense.component';
import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PaymentMethodListComponent } from './payment-method/payment-method-list/payment-method-list.component';
import { CreatePaymentMethodComponent } from './payment-method/create-payment-method/create-payment-method.component';
import { UpdatePaymentMethodComponent } from './payment-method/update-payment-method/update-payment-method.component';
import { OverTimeComponent } from './over-time/over-time.component';
import { CreateOverTimeComponent } from './over-time/create-over-time/create-over-time.component';
import { UpdateOverTimeComponent } from './over-time/update-over-time/update-over-time.component';
import { OverTimeListComponent } from './over-time/over-time-list/over-time-list.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PaygradeListComponent } from './paygrade/paygrade-list/paygrade-list.component';
import { NzInputModule } from 'ng-zorro-antd/input';


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
    PaygradeListComponent,
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
    LanguageComponent,
    LanguageListComponent,
    CreateLanguageComponent,
    UpdateLanguageComponent,
    ProjectComponent,
    ProjectListComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    ClientComponent,
    ClientListComponent,
    CreateClientComponent,
    UpdateClientComponent,
    LeaveTypeComponent,
    CreateLeaveTypeComponent,
    UpdateLeaveTypeComponent,
    LeaveTypeListComponent,
    WorkWeekComponent,
    WorkWeekListComponent,
    CreateWorkWeekComponent,
    UpdateWorkWeekComponent,
    HolidaysComponent,
    HolidayListComponent,
    CreateHolidayComponent,
    UpdateHolidayComponent,
    ExpenseComponent,
    CreateExpenseComponent,
    UpdateExpenseComponent,
    ExpenseListComponent,
    PaymentMethodComponent,
    PaymentMethodListComponent,
    CreatePaymentMethodComponent,
    UpdatePaymentMethodComponent,
    OverTimeComponent,
    CreateOverTimeComponent,
    UpdateOverTimeComponent,
    OverTimeListComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NzButtonModule,
    NzTableModule,
    ReactiveFormsModule,
    NzFormModule,
    CommonSharedModule,
    NzInputModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],

  exports: [
    NzInputModule
  ]
})
export class SharedModule { }
