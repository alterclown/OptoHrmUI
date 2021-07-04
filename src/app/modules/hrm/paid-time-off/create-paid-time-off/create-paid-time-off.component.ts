import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { LeaveTypeService } from 'src/app/modules/shared/leave-type/services/leave-type.service';
import { EmployeeService } from '../../employee/employee-services/employee.service';
import { LeavePeriodService } from '../../leave-period/services/leave-period.service';
import { PaidTimeOffService } from '../services/paid-time.service';

@Component({
  selector: 'app-create-paid-time-off',
  templateUrl: './create-paid-time-off.component.html',
  styleUrls: ['./create-paid-time-off.component.scss']
})
export class CreatePaidTimeOffComponent implements OnInit {

  paidTimeForm: FormGroup;
  employeeList:any;
  leaveTypeList:any;
  leavePeriodList:any;
  constructor(private fb: FormBuilder, private paidTimeOffService: PaidTimeOffService, private employee: EmployeeService, private leave: LeaveTypeService,private leavePeriod:LeavePeriodService) {
    this.submitPaidTime();
  }

  ngOnInit(): void {
    this.submitPaidTime();
    this.getEmployeeData();
    this.getLeavePeriodData();
    this.getLeveTypeData();
  }
  submitPaidTime() {
    this.paidTimeForm = this.fb.group({
    LeaveType: [''],
    EmployeeName: [''],
    LeavePeriod: [''],
    LeaveAmount: [''],
    Note: [''],
    EmployeeId: [''],
    CompanyId: Authentication.getCompanyIdFromLocalStorage(),
    UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.paidTimeOffService.postPaidTimeOff(this.paidTimeForm.value).subscribe(data => {
      console.log(data);
    });
  }

  getLeveTypeData() {
    this.leave.getLeaveType().subscribe(data => {
      this.leaveTypeList = data;
    });
  }
  getEmployeeData() {
    this.employee.getEmployee().subscribe(data => {
      this.employeeList = data;
    });
  }
  getLeavePeriodData() {
    this.leavePeriod.getLeavePeriod().subscribe(data => {
      this.leavePeriodList = data;
    });
  }
}
