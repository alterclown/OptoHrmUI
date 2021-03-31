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
    UpdateEmployeeEducationComponent
  ],
  imports: [
    CommonModule,
    HrmRoutingModule,
    CommonSharedModule,
  ]
})
export class HrmModule {
}
