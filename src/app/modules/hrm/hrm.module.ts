import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrmRoutingModule } from './hrm-routing.module';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAttendanceListComponent } from './employee-attendance/employee-attendance-list/employee-attendance-list.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { EmployeeSalaryListComponent } from './employee-salary/employee-salary-list/employee-salary-list.component';
import { CommonSharedModule } from '../../common.module';
import { CreateEmployeeAttendanceComponent } from './employee-attendance/create-employee-attendance/create-employee-attendance.component';
import { EmployeeProjectComponent } from './employee-project/employee-project.component';
import { EmployeeProjectListComponent } from './employee-project/employee-project-list/employee-project-list.component';
import { CreateEmployeeProjectComponent } from './employee-project/create-employee-project/create-employee-project.component';
import { CreateEmployeeSalaryComponent } from './employee-salary/create-employee-salary/create-employee-salary.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { CreateEmployeeLeaveComponent } from './employee-leave/create-employee-leave/create-employee-leave.component';
import { EmployeeLeaveListComponent } from './employee-leave/employee-leave-list/employee-leave-list.component';
import { EmployeeLoanComponent } from './employee-loan/employee-loan.component';
import { CreateEmployeeLoanComponent } from './employee-loan/create-employee-loan/create-employee-loan.component';
import { EmployeeLoanListComponent } from './employee-loan/employee-loan-list/employee-loan-list.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
import { CreateEmployeePayrollComponent } from './employee-payroll/create-employee-payroll/create-employee-payroll.component';
import { EmployeePayrollListComponent } from './employee-payroll/employee-payroll-list/employee-payroll-list.component';
import { EmployeeTaxComponent } from './employee-tax/employee-tax.component';
import { CreateEmployeeTaxComponent } from './employee-tax/create-employee-tax/create-employee-tax.component';
import { EmployeeTaxListComponent } from './employee-tax/employee-tax-list/employee-tax-list.component';
import { EmployeeTrainingComponent } from './employee-training/employee-training.component';
import { CreateEmployeeTrainingComponent } from './employee-training/create-employee-training/create-employee-training.component';
import { EmployeeTrainingListComponent } from './employee-training/employee-training-list/employee-training-list.component';
import { UpdateAttendanceComponent } from './employee-attendance/update-attendance/update-attendance.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UpdateEmployeeLeaveComponent } from './employee-leave/update-employee-leave/update-employee-leave.component';
import { UpdateEmployeeSalaryComponent } from './employee-salary/update-employee-salary/update-employee-salary.component';
import { UpdateEmployeeProjectComponent } from './employee-project/update-employee-project/update-employee-project.component';
import { UpdateEmployeeTrainingComponent } from './employee-training/update-employee-training/update-employee-training.component';
import { UpdateEmployeeTaxComponent } from './employee-tax/update-employee-tax/update-employee-tax.component';
import { UpdateEmployeePayrollComponent } from './employee-payroll/update-employee-payroll/update-employee-payroll.component';
import { UpdateEmployeeLoanComponent } from './employee-loan/update-employee-loan/update-employee-loan.component';
import { EmployeeSkillsComponent } from './employee-skills/employee-skills.component';
import { EmployeeSkillsListComponent } from './employee-skills/employee-skills-list/employee-skills-list.component';
import { CreateEmployeeSkillsComponent } from './employee-skills/create-employee-skills/create-employee-skills.component';
import { UpdateEmployeeSkillsComponent } from './employee-skills/update-employee-skills/update-employee-skills.component';
import { EmployeeEducationComponent } from './employee-education/employee-education.component';
import { EmployeeEducationListComponent } from './employee-education/employee-education-list/employee-education-list.component';
import { CreateEmployeeEducationComponent } from './employee-education/create-employee-education/create-employee-education.component';
import { UpdateEmployeeEducationComponent } from './employee-education/update-employee-education/update-employee-education.component';
import { EmployeeCertificationComponent } from './employee-certification/employee-certification.component';
import { EmployeeCertificationListComponent } from './employee-certification/employee-certification-list/employee-certification-list.component';
import { CreateEmployeeCertificationComponent } from './employee-certification/create-employee-certification/create-employee-certification.component';
import { UpdateEmployeeCertificationComponent } from './employee-certification/update-employee-certification/update-employee-certification.component';
import { EmployeeLanguageComponent } from './employee-language/employee-language.component';
import { EmployeeLanguageListComponent } from './employee-language/employee-language-list/employee-language-list.component';
import { CreateEmployeeLanguageComponent } from './employee-language/create-employee-language/create-employee-language.component';
import { UpdateEmployeeLanguageComponent } from './employee-language/update-employee-language/update-employee-language.component';
import { EmployeeDependentComponent } from './employee-dependent/employee-dependent.component';
import { EmployeeDependentListComponent } from './employee-dependent/employee-dependent-list/employee-dependent-list.component';
import { CreateEmployeeDependentComponent } from './employee-dependent/create-employee-dependent/create-employee-dependent.component';
import { UpdateEmployeeDependentComponent } from './employee-dependent/update-employee-dependent/update-employee-dependent.component';
import { EmployeeEmergencyContactComponent } from './employee-emergency-contact/employee-emergency-contact.component';
import { EmployeeEmergencyContactListComponent } from './employee-emergency-contact/employee-emergency-contact-list/employee-emergency-contact-list.component';
import { CreateEmployeeEmergencyContactComponent } from './employee-emergency-contact/create-employee-emergency-contact/create-employee-emergency-contact.component';
import { UpdateEmployeeEmergencyContactComponent } from './employee-emergency-contact/update-employee-emergency-contact/update-employee-emergency-contact.component';
import { EmployeeDeactivateComponent } from './employee-deactivate/employee-deactivate.component';
import { EmployeeDeactivateListComponent } from './employee-deactivate/employee-deactivate-list/employee-deactivate-list.component';
import { CreateEmployeeDeactivateComponent } from './employee-deactivate/create-employee-deactivate/create-employee-deactivate.component';
import { UpdateEmployeeDeactivateComponent } from './employee-deactivate/update-employee-deactivate/update-employee-deactivate.component';
import { EmployeeArchivedComponent } from './employee-archived/employee-archived.component';
import { EmployeeArchivedListComponent } from './employee-archived/employee-archived-list/employee-archived-list.component';
import { CreateEmployeeArchivedComponent } from './employee-archived/create-employee-archived/create-employee-archived.component';
import { UpdateEmployeeArchivedComponent } from './employee-archived/update-employee-archived/update-employee-archived.component';
import { MonitorAttendanceComponent } from './monitor-attendance/monitor-attendance.component';
import { MonitorAttendanceListComponent } from './monitor-attendance/monitor-attendance-list/monitor-attendance-list.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { CreateMyProjectComponent } from './my-project/create-my-project/create-my-project.component';
import { UpdateMyProjectComponent } from './my-project/update-my-project/update-my-project.component';
import { MyProjectListComponent } from './my-project/my-project-list/my-project-list.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CreateAttendanceComponent } from './attendance/create-attendance/create-attendance.component';
import { AttendanceListComponent } from './attendance/attendance-list/attendance-list.component';
import { PersonalDocumentComponent } from './personal-document/personal-document.component';
import { CreatePersonalDocumentComponent } from './personal-document/create-personal-document/create-personal-document.component';
import { UpdatePersonalDocumentComponent } from './personal-document/update-personal-document/update-personal-document.component';
import { PersonalDocumentListComponent } from './personal-document/personal-document-list/personal-document-list.component';
import { LoanTypeComponent } from './loan-type/loan-type.component';
import { CreateLoanTypeComponent } from './loan-type/create-loan-type/create-loan-type.component';
import { UpdateLoanTypeComponent } from './loan-type/update-loan-type/update-loan-type.component';
import { LoanTypeListComponent } from './loan-type/loan-type-list/loan-type-list.component';
import { TravelComponent } from './travel/travel.component';
import { CreateTravelComponent } from './travel/create-travel/create-travel.component';
import { TravelListComponent } from './travel/travel-list/travel-list.component';
import { UpdateTravelComponent } from './travel/update-travel/update-travel.component';
import { TrainingSetupComponent } from './training-setup/training-setup.component';
import { TrainingSetupListComponent } from './training-setup/training-setup-list/training-setup-list.component';
import { CreateTrainingSetupComponent } from './training-setup/create-training-setup/create-training-setup.component';
import { UpdateTrainingSetupComponent } from './training-setup/update-training-setup/update-training-setup.component';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { TrainingSessionListComponent } from './training-session/training-session-list/training-session-list.component';
import { CreateTrainingSessionComponent } from './training-session/create-training-session/create-training-session.component';
import { UpdateTrainingSessionComponent } from './training-session/update-training-session/update-training-session.component';
import { LeavePeriodComponent } from './leave-period/leave-period.component';
import { CreateLeavePeriodComponent } from './leave-period/create-leave-period/create-leave-period.component';
import { LeavePeriodListComponent } from './leave-period/leave-period-list/leave-period-list.component';
import { UpdateLeavePeriodComponent } from './leave-period/update-leave-period/update-leave-period.component';
import { LeaveRulesComponent } from './leave-rules/leave-rules.component';
import { LeaveRulesListComponent } from './leave-rules/leave-rules-list/leave-rules-list.component';
import { CreateLeaveRulesComponent } from './leave-rules/create-leave-rules/create-leave-rules.component';
import { UpdateLeaveRulesComponent } from './leave-rules/update-leave-rules/update-leave-rules.component';
import { PaidTimeOffComponent } from './paid-time-off/paid-time-off.component';
import { CreatePaidTimeOffComponent } from './paid-time-off/create-paid-time-off/create-paid-time-off.component';
import { UpdatePaidTimeOffComponent } from './paid-time-off/update-paid-time-off/update-paid-time-off.component';
import { PaidTimeOffListComponent } from './paid-time-off/paid-time-off-list/paid-time-off-list.component';
import { EmployeeExpenseComponent } from './employee-expense/employee-expense.component';
import { CreateEmployeeExpenseComponent } from './employee-expense/create-employee-expense/create-employee-expense.component';
import { UpdateEmployeeExpenseComponent } from './employee-expense/update-employee-expense/update-employee-expense.component';
import { EmployeeExpenseListComponent } from './employee-expense/employee-expense-list/employee-expense-list.component';
import { OverTimeRequestComponent } from './over-time-request/over-time-request.component';
import { CreateOverTimeRequestComponent } from './over-time-request/create-over-time-request/create-over-time-request.component';
import { UpdateOverTimeRequestComponent } from './over-time-request/update-over-time-request/update-over-time-request.component';
import { OverTimeRequestListComponent } from './over-time-request/over-time-request-list/over-time-request-list.component';
@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeAttendanceComponent,
    EmployeeAttendanceListComponent,
    EmployeeSalaryComponent,
    EmployeeSalaryListComponent,
    CreateEmployeeAttendanceComponent,
    EmployeeProjectComponent,
    EmployeeProjectListComponent,
    CreateEmployeeProjectComponent,
    CreateEmployeeSalaryComponent,
    CreateEmployeeComponent,
    EmployeeLeaveComponent,
    CreateEmployeeLeaveComponent,
    EmployeeLeaveListComponent,
    EmployeeLoanComponent,
    CreateEmployeeLoanComponent,
    EmployeeLoanListComponent,
    EmployeePayrollComponent,
    CreateEmployeePayrollComponent,
    EmployeePayrollListComponent,
    EmployeeTaxComponent,
    CreateEmployeeTaxComponent,
    EmployeeTaxListComponent,
    EmployeeTrainingComponent,
    CreateEmployeeTrainingComponent,
    EmployeeTrainingListComponent,
    UpdateAttendanceComponent,
    UpdateEmployeeComponent,
    UpdateEmployeeLeaveComponent,
    UpdateEmployeeSalaryComponent,
    UpdateEmployeeProjectComponent,
    UpdateEmployeeTrainingComponent,
    UpdateEmployeeTaxComponent,
    UpdateEmployeePayrollComponent,
    UpdateEmployeeLoanComponent,
    EmployeeSkillsComponent,
    EmployeeSkillsListComponent,
    CreateEmployeeSkillsComponent,
    UpdateEmployeeSkillsComponent,
    EmployeeEducationComponent,
    EmployeeEducationListComponent,
    CreateEmployeeEducationComponent,
    UpdateEmployeeEducationComponent,
    EmployeeCertificationComponent,
    EmployeeCertificationListComponent,
    CreateEmployeeCertificationComponent,
    UpdateEmployeeCertificationComponent,
    EmployeeLanguageComponent,
    EmployeeLanguageListComponent,
    CreateEmployeeLanguageComponent,
    UpdateEmployeeLanguageComponent,
    EmployeeDependentComponent,
    EmployeeDependentListComponent,
    CreateEmployeeDependentComponent,
    UpdateEmployeeDependentComponent,
    EmployeeEmergencyContactComponent,
    EmployeeEmergencyContactListComponent,
    CreateEmployeeEmergencyContactComponent,
    UpdateEmployeeEmergencyContactComponent,
    EmployeeDeactivateComponent,
    EmployeeDeactivateListComponent,
    CreateEmployeeDeactivateComponent,
    UpdateEmployeeDeactivateComponent,
    EmployeeArchivedComponent,
    EmployeeArchivedListComponent,
    CreateEmployeeArchivedComponent,
    UpdateEmployeeArchivedComponent,
    MonitorAttendanceComponent,
    MonitorAttendanceListComponent,
    MyProjectComponent,
    CreateMyProjectComponent,
    UpdateMyProjectComponent,
    MyProjectListComponent,
    AttendanceComponent,
    CreateAttendanceComponent,
    AttendanceListComponent,
    PersonalDocumentComponent,
    CreatePersonalDocumentComponent,
    UpdatePersonalDocumentComponent,
    PersonalDocumentListComponent,
    LoanTypeComponent,
    CreateLoanTypeComponent,
    UpdateLoanTypeComponent,
    LoanTypeListComponent,
    TravelComponent,
    CreateTravelComponent,
    TravelListComponent,
    UpdateTravelComponent,
    TrainingSetupComponent,
    TrainingSetupListComponent,
    CreateTrainingSetupComponent,
    UpdateTrainingSetupComponent,
    TrainingSessionComponent,
    TrainingSessionListComponent,
    CreateTrainingSessionComponent,
    UpdateTrainingSessionComponent,
    LeavePeriodComponent,
    CreateLeavePeriodComponent,
    LeavePeriodListComponent,
    UpdateLeavePeriodComponent,
    LeaveRulesComponent,
    LeaveRulesListComponent,
    CreateLeaveRulesComponent,
    UpdateLeaveRulesComponent,
    PaidTimeOffComponent,
    CreatePaidTimeOffComponent,
    UpdatePaidTimeOffComponent,
    PaidTimeOffListComponent,
    EmployeeExpenseComponent,
    CreateEmployeeExpenseComponent,
    UpdateEmployeeExpenseComponent,
    EmployeeExpenseListComponent,
    OverTimeRequestComponent,
    CreateOverTimeRequestComponent,
    UpdateOverTimeRequestComponent,
    OverTimeRequestListComponent,
  ],
  imports: [
    CommonModule,
    HrmRoutingModule,
    CommonSharedModule,
  ]
})
export class HrmModule {
}
