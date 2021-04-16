import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeLeaveService } from '../employee-leave-services/employee-leave.service';

@Component({
  selector: 'app-update-employee-leave',
  templateUrl: './update-employee-leave.component.html',
  styleUrls: ['./update-employee-leave.component.scss']
})
export class UpdateEmployeeLeaveComponent implements OnInit {

  leaveForm: FormGroup;
  constructor(private fb: FormBuilder, private leaveService: EmployeeLeaveService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitLeave();
  }

  ngOnInit(): void {
    this.submitLeave();
    this.getLeaveById();
  }
  submitLeave() {
    this.leaveForm = this.fb.group({
      EmployeeName:[''],
      LeaveType:[''],
      LeaveStartDate:[''],
      LeaveEndDate:[''],
      Reason:[''],
      Attachment:[''],
      Status:['']
    });
  }
  onUpdate() {
    this.leaveService.putEmployeeLeave(this._avRoute.snapshot.params.id, this.leaveForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getLeaveById() {
    this.leaveService.getEmployeeLeaveId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.leaveForm = this.fb.group({
        EmployeeName: (data['employeeName']),
        LeaveType: (data['leaveType']),
        LeaveStartDate: (data['leaveStartDate']),
        LeaveEndDate: (data['leaveEndDate']),
        Reason: (data['reason']),
        Attachment: (data['attachment']),
        Status: (data['status']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage(),
        EmployeeId: (data['employeeId']),
        LeaveTypeId: (data['leaveTypeId'])
      });
    });
  }
}
