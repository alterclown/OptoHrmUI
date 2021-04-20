import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { LeavePeriodService } from '../services/leave-period.service';

@Component({
  selector: 'app-update-leave-period',
  templateUrl: './update-leave-period.component.html',
  styleUrls: ['./update-leave-period.component.scss']
})
export class UpdateLeavePeriodComponent implements OnInit {

  leavePeriodForm: FormGroup;
  constructor(private fb: FormBuilder, private leavePeriodService: LeavePeriodService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitLeavePeriod();
  }

  ngOnInit(): void {
    this.submitLeavePeriod();
    this.getLeavePeriodById();
  }
  submitLeavePeriod() {
    this.leavePeriodForm = this.fb.group({
      LeavePeriodName: [''],
      PeriodStartDate: [''],
      PeriodEndDate: ['']
    });
  }
  onUpdate() {
    this.leavePeriodService.putLeavePeriod(this._avRoute.snapshot.params.id, this.leavePeriodForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getLeavePeriodById() {
    this.leavePeriodService.getLeavePeriodId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.leavePeriodForm = this.fb.group({
        LeavePeriodId: (data['leavePeriodId']),
        LeavePeriodName: (data['leavePeriodName']),
        PeriodStartDate: (data['periodStartDate']),
        PeriodEndDate: (data['periodEndDate']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage(),
        LeaveTypeId: (data['leaveTypeId']),
      });
    });
  }

}
