import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { DesignationComponent } from './designation/designation.component';
import { DepartmentComponent } from './department/department.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { UpdateCompanyComponent } from './company/update-company/update-company.component';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';
import { CreateDesignationComponent } from './designation/create-designation/create-designation.component';
import { UpdateDepartmentComponent } from './department/update-department/update-department.component';
import { UpdateDesignationComponent } from './designation/update-designation/update-designation.component';
import { CreateCertificationComponent } from './certification/create-certification/create-certification.component';
import { CertificationComponent } from './certification/certification.component';
import { UpdateCertificationComponent } from './certification/update-certification/update-certification.component';
import { ClientComponent } from './client/client.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { CreateEducationComponent } from './education/create-education/create-education.component';
import { EducationComponent } from './education/education.component';
import { UpdateEducationComponent } from './education/update-education/update-education.component';
import { CreateEmploymentStatusComponent } from './employmentstatus/create-employment-status/create-employment-status.component';
import { EmploymentstatusComponent } from './employmentstatus/employmentstatus.component';
import { UpdateEmploymentStatusComponent } from './employmentstatus/update-employment-status/update-employment-status.component';
import { CreateExpenseComponent } from './expense/create-expense/create-expense.component';
import { ExpenseComponent } from './expense/expense.component';
import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';
import { CreateHolidayComponent } from './holidays/create-holiday/create-holiday.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { UpdateHolidayComponent } from './holidays/update-holiday/update-holiday.component';
import { CreateJobTitleComponent } from './job-title/create-job-title/create-job-title.component';
import { JobTitleComponent } from './job-title/job-title.component';
import { UpdateJobTitleComponent } from './job-title/update-job-title/update-job-title.component';
import { CreateLanguageComponent } from './language/create-language/create-language.component';
import { LanguageComponent } from './language/language.component';
import { UpdateLanguageComponent } from './language/update-language/update-language.component';
import { CreateLeaveTypeComponent } from './leave-type/create-leave-type/create-leave-type.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { UpdateLeaveTypeComponent } from './leave-type/update-leave-type/update-leave-type.component';
import { CreateOverTimeComponent } from './over-time/create-over-time/create-over-time.component';
import { OverTimeComponent } from './over-time/over-time.component';
import { UpdateOverTimeComponent } from './over-time/update-over-time/update-over-time.component';
import { PaygradeComponent } from './paygrade/paygrade.component';
import { CreatePaygradeComponent } from './paygrade/create-paygrade/create-paygrade.component';
import { UpdatePaygradeComponent } from './paygrade/update-paygrade/update-paygrade.component';
import { CreatePaymentMethodComponent } from './payment-method/create-payment-method/create-payment-method.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { UpdatePaymentMethodComponent } from './payment-method/update-payment-method/update-payment-method.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { ProjectComponent } from './project/project.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';
import { CreateSkillComponent } from './skills/create-skill/create-skill.component';
import { SkillsComponent } from './skills/skills.component';
import { UpdateSkillComponent } from './skills/update-skill/update-skill.component';
import { CreateWorkWeekComponent } from './work-week/create-work-week/create-work-week.component';
import { UpdateWorkWeekComponent } from './work-week/update-work-week/update-work-week.component';
import { WorkWeekComponent } from './work-week/work-week.component';

const routes: Routes = [
  { path: 'company', component: CompanyComponent, pathMatch: 'full' },
  { path: 'company/create', component: CreateCompanyComponent, pathMatch: 'full' },
  { path: 'company/update/:id', component: UpdateCompanyComponent, pathMatch: 'full' },
  { path: 'designation/create', component: CreateDesignationComponent, pathMatch: 'full' },
  { path: 'designation', component: DesignationComponent, pathMatch: 'full' },
  { path: 'designation/update/:id', component: UpdateDesignationComponent, pathMatch: 'full' },
  { path: 'department/create', component: CreateDepartmentComponent, pathMatch: 'full' },
  { path: 'department/update/:id', component: UpdateDepartmentComponent, pathMatch: 'full' },
  { path: 'department', component: DepartmentComponent, pathMatch: 'full' },
  { path: 'certification', component: CertificationComponent, pathMatch: 'full' },
  { path: 'certification/create', component: CreateCertificationComponent, pathMatch: 'full' },
  { path: 'certification/update/:id', component: UpdateCertificationComponent, pathMatch: 'full' },
  { path: 'client', component: ClientComponent, pathMatch: 'full' },
  { path: 'client/create', component: CreateClientComponent, pathMatch: 'full' },
  { path: 'client/update/:id', component: UpdateClientComponent, pathMatch: 'full' },
  { path: 'education', component: EducationComponent, pathMatch: 'full' },
  { path: 'education/create', component: CreateEducationComponent, pathMatch: 'full' },
  { path: 'education/update/:id', component: UpdateEducationComponent, pathMatch: 'full' },
  { path: 'employment-status', component: EmploymentstatusComponent, pathMatch: 'full' },
  { path: 'employment-status/create', component: CreateEmploymentStatusComponent, pathMatch: 'full' },
  { path: 'employment-status/update/:id', component: UpdateEmploymentStatusComponent, pathMatch: 'full' },
  { path: 'expense', component: ExpenseComponent, pathMatch: 'full' },
  { path: 'expense/create', component: CreateExpenseComponent, pathMatch: 'full' },
  { path: 'expense/update/:id', component: UpdateExpenseComponent, pathMatch: 'full' },
  { path: 'holiday', component: HolidaysComponent, pathMatch: 'full' },
  { path: 'holiday/create', component: CreateHolidayComponent, pathMatch: 'full' },
  { path: 'holiday/update/:id', component: UpdateHolidayComponent, pathMatch: 'full' },
  { path: 'job-title', component: JobTitleComponent, pathMatch: 'full' },
  { path: 'job-title/create', component: CreateJobTitleComponent, pathMatch: 'full' },
  { path: 'job-title/update/:id', component: UpdateJobTitleComponent, pathMatch: 'full' },
  { path: 'language', component: LanguageComponent, pathMatch: 'full' },
  { path: 'language/create', component: CreateLanguageComponent, pathMatch: 'full' },
  { path: 'language/update/:id', component: UpdateLanguageComponent, pathMatch: 'full' },
  { path: 'leave-type', component: LeaveTypeComponent, pathMatch: 'full' },
  { path: 'leave-type/create', component: CreateLeaveTypeComponent, pathMatch: 'full' },
  { path: 'leave-type/update/:id', component: UpdateLeaveTypeComponent, pathMatch: 'full' },
  { path: 'over-time', component: OverTimeComponent, pathMatch: 'full' },
  { path: 'over-time/create', component: CreateOverTimeComponent, pathMatch: 'full' },
  { path: 'over-time/update/:id', component: UpdateOverTimeComponent, pathMatch: 'full' },
  { path: 'paygrade', component: PaygradeComponent, pathMatch: 'full' },
  { path: 'paygrade/create', component: CreatePaygradeComponent, pathMatch: 'full' },
  { path: 'paygrade/update/:id', component: UpdatePaygradeComponent, pathMatch: 'full' },
  { path: 'payment-method', component: PaymentMethodComponent, pathMatch: 'full' },
  { path: 'payment-method/create', component: CreatePaymentMethodComponent, pathMatch: 'full' },
  { path: 'payment-method/update/:id', component: UpdatePaymentMethodComponent, pathMatch: 'full' },
  { path: 'project', component: ProjectComponent, pathMatch: 'full' },
  { path: 'project/create', component: CreateProjectComponent, pathMatch: 'full' },
  { path: 'project/update/:id', component: UpdateProjectComponent, pathMatch: 'full' },
  { path: 'skill', component: SkillsComponent, pathMatch: 'full' },
  { path: 'skill/create', component: CreateSkillComponent, pathMatch: 'full' },
  { path: 'skill/update/:id', component: UpdateSkillComponent, pathMatch: 'full' },
  { path: 'work-week', component: WorkWeekComponent, pathMatch: 'full' },
  { path: 'work-week/create', component: CreateWorkWeekComponent, pathMatch: 'full' },
  { path: 'work-week/update/:id', component: UpdateWorkWeekComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {
}
