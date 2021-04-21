import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { OverTimeRequestService } from '../services/over-time-request.service';

@Component({
  selector: 'app-create-over-time-request',
  templateUrl: './create-over-time-request.component.html',
  styleUrls: ['./create-over-time-request.component.scss']
})
export class CreateOverTimeRequestComponent implements OnInit {

  overTimeForm: FormGroup;
  constructor(private fb: FormBuilder, private overTimeRequestService: OverTimeRequestService) {
    this.submitOverTimeRequest();
  }

  ngOnInit(): void {
    this.submitOverTimeRequest();
  }
  submitOverTimeRequest() {
    this.overTimeForm = this.fb.group({
      EmployeeName: [''],
      Category: [''],
      StartTime: [''],
      EndTime: [''],
      Project: [''],
      Status: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage(),
      OverTimeId: [''],
    });
  }
  onSubmit() {
    this.overTimeRequestService.postOverTimeRequest(this.overTimeForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
