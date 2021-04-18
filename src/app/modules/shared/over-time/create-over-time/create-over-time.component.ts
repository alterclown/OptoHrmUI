import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { OverTimeService } from '../services/over-time.service';

@Component({
  selector: 'app-create-over-time',
  templateUrl: './create-over-time.component.html',
  styleUrls: ['./create-over-time.component.scss']
})
export class CreateOverTimeComponent implements OnInit {

  overTimeForm: FormGroup;
  constructor(private fb: FormBuilder, private overTimeService: OverTimeService) {
    this.submitOverTime();
  }

  ngOnInit(): void {
    this.submitOverTime();
  }
  submitOverTime() {
    this.overTimeForm = this.fb.group({
      Category: [''],
      OverTimeName: [''],
      StartTime: [''],
      EndTime: [''],
      Project: [''],
      Notes: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.overTimeService.postOverTime(this.overTimeForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
