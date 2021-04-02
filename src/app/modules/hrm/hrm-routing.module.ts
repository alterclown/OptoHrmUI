import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { CreateEmployeeAttendanceComponent } from './employee-attendance/create-employee-attendance/create-employee-attendance.component';
import { CreateEmployeeProjectComponent } from './employee-project/create-employee-project/create-employee-project.component';
import { EmployeeProjectComponent } from './employee-project/employee-project.component';
import { CreateEmployeeSalaryComponent } from './employee-salary/create-employee-salary/create-employee-salary.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { CreateEmployeeLeaveComponent } from './employee-leave/create-employee-leave/create-employee-leave.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { CreateEmployeeLoanComponent } from './employee-loan/create-employee-loan/create-employee-loan.component';
import { EmployeeLoanComponent } from './employee-loan/employee-loan.component';
import { CreateEmployeePayrollComponent } from './employee-payroll/create-employee-payroll/create-employee-payroll.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
import { CreateEmployeeTaxComponent } from './employee-tax/create-employee-tax/create-employee-tax.component';
import { EmployeeTaxComponent } from './employee-tax/employee-tax.component';
import { EmployeeTrainingComponent } from './employee-training/employee-training.component';
import { CreateEmployeeTrainingComponent } from './employee-training/create-employee-training/create-employee-training.component';
import { UpdateEmployeeAttendanceComponent } from './employee-attendance/update-attendance/update-attendance.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UpdateEmployeeLeaveComponent } from './employee-leave/update-employee-leave/update-employee-leave.component';
import { UpdateEmployeeSalaryComponent } from './employee-salary/update-employee-salary/update-employee-salary.component';
import { UpdateEmployeeProjectComponent } from './employee-project/update-employee-project/update-employee-project.component';
import { UpdateEmployeeTrainingComponent } from './employee-training/update-employee-training/update-employee-training.component';
import { UpdateEmployeeTaxComponent } from './employee-tax/update-employee-tax/update-employee-tax.component';
import { UpdateEmployeeLoanComponent } from './employee-loan/update-employee-loan/update-employee-loan.component';
import { UpdateEmployeePayrollComponent } from './employee-payroll/update-employee-payroll/update-employee-payroll.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CreateAttendanceComponent } from './attendance/create-attendance/create-attendance.component';
import { CreateEmployeeArchivedComponent } from './employee-archived/create-employee-archived/create-employee-archived.component';
import { EmployeeArchivedComponent } from './employee-archived/employee-archived.component';
import { CreateEmployeeCertificationComponent } from './employee-certification/create-employee-certification/create-employee-certification.component';
import { EmployeeCertificationComponent } from './employee-certification/employee-certification.component';
import { UpdateEmployeeCertificationComponent } from './employee-certification/update-employee-certification/update-employee-certification.component';
import { UpdateEmployeeArchivedComponent } from './employee-archived/update-employee-archived/update-employee-archived.component';
import { CreateEmployeeDeactivateComponent } from './employee-deactivate/create-employee-deactivate/create-employee-deactivate.component';
import { EmployeeDeactivateComponent } from './employee-deactivate/employee-deactivate.component';
import { UpdateEmployeeDeactivateComponent } from './employee-deactivate/update-employee-deactivate/update-employee-deactivate.component';
import { CreateEmployeeDependentComponent } from './employee-dependent/create-employee-dependent/create-employee-dependent.component';
import { EmployeeDependentComponent } from './employee-dependent/employee-dependent.component';
import { UpdateEmployeeDependentComponent } from './employee-dependent/update-employee-dependent/update-employee-dependent.component';
import { CreateEmployeeEducationComponent } from './employee-education/create-employee-education/create-employee-education.component';
import { EmployeeEducationComponent } from './employee-education/employee-education.component';
import { UpdateEmployeeEducationComponent } from './employee-education/update-employee-education/update-employee-education.component';
import { CreateEmployeeEmergencyContactComponent } from './employee-emergency-contact/create-employee-emergency-contact/create-employee-emergency-contact.component';
import { EmployeeEmergencyContactComponent } from './employee-emergency-contact/employee-emergency-contact.component';
import { UpdateEmployeeEmergencyContactComponent } from './employee-emergency-contact/update-employee-emergency-contact/update-employee-emergency-contact.component';
import { EmployeeExpenseComponent } from './employee-expense/employee-expense.component';
import { CreateEmployeeExpenseComponent } from './employee-expense/create-employee-expense/create-employee-expense.component';
import { UpdateEmployeeExpenseComponent } from './employee-expense/update-employee-expense/update-employee-expense.component';
import { EmployeeLanguageComponent } from './employee-language/employee-language.component';
import { CreateEmployeeLanguageComponent } from './employee-language/create-employee-language/create-employee-language.component';
import { UpdateEmployeeLanguageComponent } from './employee-language/update-employee-language/update-employee-language.component';
import { CreateEmployeeSkillsComponent } from './employee-skills/create-employee-skills/create-employee-skills.component';
import { EmployeeSkillsComponent } from './employee-skills/employee-skills.component';
import { UpdateEmployeeSkillsComponent } from './employee-skills/update-employee-skills/update-employee-skills.component';
import { CreateLeavePeriodComponent } from './leave-period/create-leave-period/create-leave-period.component';
import { LeavePeriodComponent } from './leave-period/leave-period.component';
import { UpdateLeavePeriodComponent } from './leave-period/update-leave-period/update-leave-period.component';
import { CreateLeaveRulesComponent } from './leave-rules/create-leave-rules/create-leave-rules.component';
import { LeaveRulesComponent } from './leave-rules/leave-rules.component';
import { UpdateLeaveRulesComponent } from './leave-rules/update-leave-rules/update-leave-rules.component';
import { CreateLoanTypeComponent } from './loan-type/create-loan-type/create-loan-type.component';
import { LoanTypeComponent } from './loan-type/loan-type.component';
import { UpdateLoanTypeComponent } from './loan-type/update-loan-type/update-loan-type.component';
import { MonitorAttendanceComponent } from './monitor-attendance/monitor-attendance.component';
import { CreateMonitorAttendanceComponent } from './monitor-attendance/create-monitor-attendance/create-monitor-attendance.component';
import { UpdateMonitorAttendanceComponent } from './monitor-attendance/update-monitor-attendance/update-monitor-attendance.component';
import { CreateMyProjectComponent } from './my-project/create-my-project/create-my-project.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { UpdateMyProjectComponent } from './my-project/update-my-project/update-my-project.component';
import { CreateOverTimeRequestComponent } from './over-time-request/create-over-time-request/create-over-time-request.component';
import { OverTimeRequestComponent } from './over-time-request/over-time-request.component';
import { UpdateOverTimeRequestComponent } from './over-time-request/update-over-time-request/update-over-time-request.component';
import { CreatePaidTimeOffComponent } from './paid-time-off/create-paid-time-off/create-paid-time-off.component';
import { PaidTimeOffComponent } from './paid-time-off/paid-time-off.component';
import { UpdatePaidTimeOffComponent } from './paid-time-off/update-paid-time-off/update-paid-time-off.component';
import { CreatePersonalDocumentComponent } from './personal-document/create-personal-document/create-personal-document.component';
import { PersonalDocumentComponent } from './personal-document/personal-document.component';
import { UpdatePersonalDocumentComponent } from './personal-document/update-personal-document/update-personal-document.component';
import { CreateTrainingSessionComponent } from './training-session/create-training-session/create-training-session.component';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { UpdateTrainingSessionComponent } from './training-session/update-training-session/update-training-session.component';
import { CreateTrainingSetupComponent } from './training-setup/create-training-setup/create-training-setup.component';
import { TrainingSetupComponent } from './training-setup/training-setup.component';
import { UpdateTrainingSetupComponent } from './training-setup/update-training-setup/update-training-setup.component';
import { CreateTravelComponent } from './travel/create-travel/create-travel.component';
import { TravelComponent } from './travel/travel.component';
import { UpdateTravelComponent } from './travel/update-travel/update-travel.component';
import { UpdateAttendanceComponent } from './attendance/update-attendance/update-attendance.component';

const routes: Routes = [
  {path: 'employee/create', component: CreateEmployeeComponent, pathMatch: 'full'},
  {path: 'employee', component: EmployeeComponent, pathMatch: 'full'},
  {path: 'employee/update/:id', component: UpdateEmployeeComponent, pathMatch: 'full'},
  {path: 'employee-attendance', component: EmployeeAttendanceComponent, pathMatch: 'full'},
  {path: 'employee-attendance/create', component: CreateEmployeeAttendanceComponent, pathMatch: 'full'},
  {path: 'employee-attendance/update/:id', component: UpdateEmployeeAttendanceComponent, pathMatch: 'full'},
  {path: 'employee-salary', component: EmployeeSalaryComponent, pathMatch: 'full'},
  {path: 'employee-salary/create', component: CreateEmployeeSalaryComponent, pathMatch: 'full'},
  {path: 'employee-salary/update/:id', component: UpdateEmployeeSalaryComponent, pathMatch: 'full'},
  {path: 'employee-project/create', component: CreateEmployeeProjectComponent, pathMatch: 'full'},
  {path: 'employee-project/update/:id', component: UpdateEmployeeProjectComponent, pathMatch: 'full'},
  {path: 'employee-project', component: EmployeeProjectComponent, pathMatch: 'full'},
  {path: 'employee-leave/create', component: CreateEmployeeLeaveComponent, pathMatch: 'full'},
  {path: 'employee-leave/update/:id', component: UpdateEmployeeLeaveComponent, pathMatch: 'full'},
  {path: 'employee-leave', component: EmployeeLeaveComponent, pathMatch: 'full'},
  {path: 'employee-loan/create', component: CreateEmployeeLoanComponent, pathMatch: 'full'},
  {path: 'employee-loan', component: EmployeeLoanComponent, pathMatch: 'full'},
  {path: 'employee-loan/update/:id', component: UpdateEmployeeLoanComponent, pathMatch: 'full'},
  {path: 'employee-payroll/create', component: CreateEmployeePayrollComponent, pathMatch: 'full'},
  {path: 'employee-payroll', component: EmployeePayrollComponent, pathMatch: 'full'},
  {path: 'employee-payroll/update/:id', component: UpdateEmployeePayrollComponent, pathMatch: 'full'},
  {path: 'employee-tax/create', component: CreateEmployeeTaxComponent, pathMatch: 'full'},
  {path: 'employee-tax/update/:id', component: UpdateEmployeeTaxComponent, pathMatch: 'full'},
  {path: 'employee-tax', component: EmployeeTaxComponent, pathMatch: 'full'},
  {path: 'employee-training/create', component: CreateEmployeeTrainingComponent, pathMatch: 'full'},
  {path: 'employee-training/update/:id', component: UpdateEmployeeTrainingComponent, pathMatch: 'full'},
  {path: 'employee-training', component: EmployeeTrainingComponent, pathMatch: 'full'},

  {path: 'attendance/create', component: CreateAttendanceComponent, pathMatch: 'full'},
  {path: 'attendance/update/:id', component: UpdateAttendanceComponent, pathMatch: 'full'},
  {path: 'attendance', component: AttendanceComponent, pathMatch: 'full'},

  {path: 'archieved/create', component: CreateEmployeeArchivedComponent, pathMatch: 'full'},
  {path: 'archieved/update/:id', component: UpdateEmployeeArchivedComponent, pathMatch: 'full'},
  {path: 'archieved', component: EmployeeArchivedComponent, pathMatch: 'full'},

  {path: 'employee-certifaication/create', component: CreateEmployeeCertificationComponent, pathMatch: 'full'},
  {path: 'employee-certifaication/update/:id', component: UpdateEmployeeCertificationComponent, pathMatch: 'full'},
  {path: 'employee-certifaication', component: EmployeeCertificationComponent, pathMatch: 'full'},

  {path: 'employee-deactivate/create', component: CreateEmployeeDeactivateComponent, pathMatch: 'full'},
  {path: 'employee-deactivate/update/:id', component: UpdateEmployeeDeactivateComponent, pathMatch: 'full'},
  {path: 'employee-deactivate', component: EmployeeDeactivateComponent, pathMatch: 'full'},

  {path: 'employee-dependent/create', component: CreateEmployeeDependentComponent, pathMatch: 'full'},
  {path: 'employee-dependent/update/:id', component: UpdateEmployeeDependentComponent, pathMatch: 'full'},
  {path: 'employee-dependent', component: EmployeeDependentComponent, pathMatch: 'full'},

  {path: 'employee-education/create', component: CreateEmployeeEducationComponent, pathMatch: 'full'},
  {path: 'employee-education/update/:id', component: UpdateEmployeeEducationComponent, pathMatch: 'full'},
  {path: 'employee-education', component: EmployeeEducationComponent, pathMatch: 'full'},

  {path: 'emergency-contact/create', component: CreateEmployeeEmergencyContactComponent, pathMatch: 'full'},
  {path: 'emergency-contact/update/:id', component: UpdateEmployeeEmergencyContactComponent, pathMatch: 'full'},
  {path: 'emergency-contact', component: EmployeeEmergencyContactComponent, pathMatch: 'full'},

  {path: 'employee-expense/create', component: CreateEmployeeExpenseComponent, pathMatch: 'full'},
  {path: 'employee-expense/update/:id', component: UpdateEmployeeExpenseComponent, pathMatch: 'full'},
  {path: 'employee-expense', component: EmployeeExpenseComponent, pathMatch: 'full'},

  {path: 'employee-language/create', component: CreateEmployeeLanguageComponent, pathMatch: 'full'},
  {path: 'employee-language/update/:id', component: UpdateEmployeeLanguageComponent, pathMatch: 'full'},
  {path: 'employee-language', component: EmployeeLanguageComponent, pathMatch: 'full'},

  {path: 'employee-skill/create', component: CreateEmployeeSkillsComponent, pathMatch: 'full'},
  {path: 'employee-skill/update/:id', component: UpdateEmployeeSkillsComponent, pathMatch: 'full'},
  {path: 'employee-skill', component: EmployeeSkillsComponent, pathMatch: 'full'},

  {path: 'leave-period/create', component: CreateLeavePeriodComponent, pathMatch: 'full'},
  {path: 'leave-period/update/:id', component: UpdateLeavePeriodComponent, pathMatch: 'full'},
  {path: 'leave-period', component: LeavePeriodComponent, pathMatch: 'full'},

  {path: 'leave-rules/create', component: CreateLeaveRulesComponent, pathMatch: 'full'},
  {path: 'leave-rules/update/:id', component: UpdateLeaveRulesComponent, pathMatch: 'full'},
  {path: 'leave-rules', component: LeaveRulesComponent, pathMatch: 'full'},

  {path: 'loan-type/create', component: CreateLoanTypeComponent, pathMatch: 'full'},
  {path: 'loan-type/update/:id', component: UpdateLoanTypeComponent, pathMatch: 'full'},
  {path: 'loan-type', component: LoanTypeComponent, pathMatch: 'full'},
  
  {path: 'monitor-attendance/create', component: CreateMonitorAttendanceComponent, pathMatch: 'full'},
  {path: 'monitor-attendance/update/:id', component: UpdateMonitorAttendanceComponent, pathMatch: 'full'},
  {path: 'monitor-attendance', component: MonitorAttendanceComponent, pathMatch: 'full'},

  {path: 'my-project/create', component: CreateMyProjectComponent, pathMatch: 'full'},
  {path: 'my-project/update/:id', component: UpdateMyProjectComponent, pathMatch: 'full'},
  {path: 'my-project', component: MyProjectComponent, pathMatch: 'full'},

  {path: 'over-time/create', component: CreateOverTimeRequestComponent, pathMatch: 'full'},
  {path: 'over-time/update/:id', component: UpdateOverTimeRequestComponent, pathMatch: 'full'},
  {path: 'over-time', component: OverTimeRequestComponent, pathMatch: 'full'},

  {path: 'paid-time/create', component: CreatePaidTimeOffComponent, pathMatch: 'full'},
  {path: 'paid-time/update/:id', component: UpdatePaidTimeOffComponent, pathMatch: 'full'},
  {path: 'paid-time', component: PaidTimeOffComponent, pathMatch: 'full'},

  {path: 'personal-document/create', component: CreatePersonalDocumentComponent, pathMatch: 'full'},
  {path: 'personal-document/update/:id', component: UpdatePersonalDocumentComponent, pathMatch: 'full'},
  {path: 'personal-document', component: PersonalDocumentComponent, pathMatch: 'full'},

  {path: 'travel/create', component: CreateTravelComponent, pathMatch: 'full'},
  {path: 'travel/update/:id', component: UpdateTravelComponent, pathMatch: 'full'},
  {path: 'travel', component: TravelComponent, pathMatch: 'full'},

  {path: 'training-session/create', component: CreateTrainingSessionComponent, pathMatch: 'full'},
  {path: 'training-session/update/:id', component: UpdateTrainingSessionComponent, pathMatch: 'full'},
  {path: 'training-session', component: TrainingSessionComponent, pathMatch: 'full'},

  {path: 'training-setup/create', component: CreateTrainingSetupComponent, pathMatch: 'full'},
  {path: 'training-setup/update/:id', component: UpdateTrainingSetupComponent, pathMatch: 'full'},
  {path: 'training-setup', component: TrainingSetupComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmRoutingModule {
}
