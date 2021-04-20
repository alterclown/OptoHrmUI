import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { LeavePeriodService } from '../services/leave-period.service';

@Component({
  selector: 'app-create-leave-period',
  templateUrl: './create-leave-period.component.html',
  styleUrls: ['./create-leave-period.component.scss']
})
export class CreateLeavePeriodComponent implements OnInit {

  leavePeriodForm: FormGroup;
  constructor(private fb: FormBuilder, private leavePeriodService: LeavePeriodService) {
    this.submitLeavePeriod();
  }

  ngOnInit(): void {
    this.submitLeavePeriod();
  }
  submitLeavePeriod() {
    this.leavePeriodForm = this.fb.group({
      LeavePeriodName: [''],
      PeriodStartDate: [''],
      PeriodEndDate: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage(),
      LeaveTypeId: [''],
    });
  }
  onSubmit() {
    this.leavePeriodService.postLeavePeriod(this.leavePeriodForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
