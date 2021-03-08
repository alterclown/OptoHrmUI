import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeePayrollService } from '../employee-payroll-services/employee-payroll.service';

@Component({
  selector: 'app-create-employee-payroll',
  templateUrl: './create-employee-payroll.component.html',
  styleUrls: ['./create-employee-payroll.component.scss']
})
export class CreateEmployeePayrollComponent implements OnInit {

  payForm: FormGroup;
  constructor(private fb: FormBuilder, private payService: EmployeePayrollService) {
    this.submitPayroll();
  }

  ngOnInit(): void {
    this.submitPayroll();
  }
  submitPayroll(){
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
  onSubmit(){
    this.payService.postPayroll(this.payForm.value).subscribe(data =>{
      console.log(data);
      //this._router.navigate(['company']);
    })
  }

}
