import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { PaidTimeOffService } from '../services/paid-time.service';

@Component({
  selector: 'app-create-paid-time-off',
  templateUrl: './create-paid-time-off.component.html',
  styleUrls: ['./create-paid-time-off.component.scss']
})
export class CreatePaidTimeOffComponent implements OnInit {

  paidTimeForm: FormGroup;
  constructor(private fb: FormBuilder, private paidTimeOffService: PaidTimeOffService) {
    this.submitPaidTime();
  }

  ngOnInit(): void {
    this.submitPaidTime();
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
}
