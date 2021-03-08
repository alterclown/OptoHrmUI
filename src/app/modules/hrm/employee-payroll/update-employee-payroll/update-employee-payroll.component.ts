import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeePayrollService } from '../employee-payroll-services/employee-payroll.service';

@Component({
  selector: 'app-update-employee-payroll',
  templateUrl: './update-employee-payroll.component.html',
  styleUrls: ['./update-employee-payroll.component.scss']
})
export class UpdateEmployeePayrollComponent implements OnInit {

  payForm: FormGroup;
  constructor(private fb: FormBuilder,private payService: EmployeePayrollService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitLoan();
    this.getPayrollId();
  }
  submitLoan(){
    this.payForm = this.fb.group({
      EmployeeId:[''],
      Month:[''],
      Year:[''],
      TotalPresent:[''],
      TotalAbsent:[''],
      LeaveDays:[''],
      Deduction:[''],
      LeaveStatus:[''],
      FestivalAdvance:[''],
      HousingLoan:[''],
      VehicleLoan:[''],
      OtherLoan:[''],
      LossOfPay:[''],
      TDS:[''],
      ProfessionalFees:[''],
      OtherDeductions:[''],
      TotalEarnings:[''],
      OtherPay:[''],
      BasicSalary:[''],
      SalaryPerDay:[''],
      Pay:[''],
      Earnings:[''],
      Deductions:[''],
      NetPay:[''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
 getPayrollId() {
  this.payService.getPayrollId(this._avRoute.snapshot.params.id).subscribe(data => {
    this.payForm = this.fb.group({      
      EmployeeId: (data['employeeId']),
      Month:(data['month']),
      Year:(data['year']),
      TotalPresent:(data['totalPresent']),
      TotalAbsent:(data['totalAbsent']),
      LeaveDays:(data['leaveDays']),
      Deduction:(data['deduction']),
      LeaveStatus:(data['leaveStatus']),
      FestivalAdvance:(data['festivalAdvance']),
      HousingLoan:(data['housingLoan']),
      VehicleLoan: (data['vehicleLoan']),
      OtherLoan: (data['otherLoan']),
      LossOfPay: (data['lossOfPay']),
      TDS:(data['tds']),
      ProfessionalFees:(data['professionalFees']),
      OtherDeductions:(data['otherDeductions']),
      TotalEarnings:(data['totalEarnings']),
      OtherPay:(data['otherPay']),
      BasicSalary:(data['basicSalary']),
      SalaryPerDay:(data['salaryPerDay']),
      Pay:(data['pay']),
      Earnings:(data['earnings']),
      Deductions:(data['deductions']),
      NetPay:(data['netPay']),
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  });
}
onUpdate() {
  this.payService.putPayroll(this._avRoute.snapshot.params.id, this.payForm.value).subscribe(data => {
    console.log(data);
    //this._router.navigate(['company']);
  });
}

}
