import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { PaidTimeOffService } from '../services/paid-time.service';

@Component({
  selector: 'app-update-paid-time-off',
  templateUrl: './update-paid-time-off.component.html',
  styleUrls: ['./update-paid-time-off.component.scss']
})
export class UpdatePaidTimeOffComponent implements OnInit {

  paidTimeForm: FormGroup;
  constructor(private fb: FormBuilder, private paidTimeOffService: PaidTimeOffService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitPaidTime();
  }

  ngOnInit(): void {
    this.submitPaidTime();
    this.getPaidTimeOffId();
  }
  submitPaidTime() {
    this.paidTimeForm = this.fb.group({
      LeaveType: [''],
      EmployeeName: [''],
      LeavePeriod: [''],
      LeaveAmount: [''],
      Note: ['']
    });
  }
  onUpdate() {
    this.paidTimeOffService.putPaidTimeOff(this._avRoute.snapshot.params.id, this.paidTimeForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getPaidTimeOffId() {
    this.paidTimeOffService.getPaidTimeOffId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.paidTimeForm = this.fb.group({
        PaidTimeOffId: (data['paidTimeOffId']),
        LeaveType: (data['leaveType']),
        EmployeeName: (data['employeeName']),
        LeavePeriod: (data['leavePeriod']),
        LeaveAmount: (data['leaveAmount']),
        Note: (data['note']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }

}
