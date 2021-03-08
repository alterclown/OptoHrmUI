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
import { UpdateAttendanceComponent } from './employee-attendance/update-attendance/update-attendance.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UpdateEmployeeLeaveComponent } from './employee-leave/update-employee-leave/update-employee-leave.component';
import { UpdateEmployeeSalaryComponent } from './employee-salary/update-employee-salary/update-employee-salary.component';
import { UpdateEmployeeProjectComponent } from './employee-project/update-employee-project/update-employee-project.component';
import { UpdateEmployeeTrainingComponent } from './employee-training/update-employee-training/update-employee-training.component';
import { UpdateEmployeeTaxComponent } from './employee-tax/update-employee-tax/update-employee-tax.component';
import { UpdateEmployeeLoanComponent } from './employee-loan/update-employee-loan/update-employee-loan.component';
import { UpdateEmployeePayrollComponent } from './employee-payroll/update-employee-payroll/update-employee-payroll.component';

const routes: Routes = [
  {path: 'employee/create', component: CreateEmployeeComponent, pathMatch: 'full'},
  {path: 'employee', component: EmployeeComponent, pathMatch: 'full'},
  {path: 'employee/update/:id', component: UpdateEmployeeComponent, pathMatch: 'full'},
  {path: 'employee-attendance', component: EmployeeAttendanceComponent, pathMatch: 'full'},
  {path: 'employee-attendance/create', component: CreateEmployeeAttendanceComponent, pathMatch: 'full'},
  {path: 'employee-attendance/update/:id', component: UpdateAttendanceComponent, pathMatch: 'full'},
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmRoutingModule {
}
