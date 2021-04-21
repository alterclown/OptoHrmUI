import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { OverTimeRequestService } from '../services/over-time-request.service';

@Component({
  selector: 'app-update-over-time-request',
  templateUrl: './update-over-time-request.component.html',
  styleUrls: ['./update-over-time-request.component.scss']
})
export class UpdateOverTimeRequestComponent implements OnInit {

  overTimeForm: FormGroup;
  constructor(private fb: FormBuilder, private overTimeRequestService: OverTimeRequestService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitOverTimeRequest();
  }

  ngOnInit(): void {
    this.submitOverTimeRequest();
    this.getOverTimeRequestId();
  }
  submitOverTimeRequest() {
    this.overTimeForm = this.fb.group({
      EmployeeName: [''],
      Category: [''],
      StartTime: [''],
      EndTime: [''],
      Project: [''],
      Status: ['']
    });
  }
  onUpdate() {
    this.overTimeRequestService.putOverTimeRequest(this._avRoute.snapshot.params.id, this.overTimeForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getOverTimeRequestId() {
    this.overTimeRequestService.getOverTimeRequestId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.overTimeForm = this.fb.group({
        OverTimeRequestId: (data['overTimeRequestId']),
        EmployeeName: (data['employeeName']),
        Category: (data['category']),
        StartTime: (data['startTime']),
        EndTime: (data['endTime']),
        Project: (data['project']),
        Status: (data['status']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage(),
        OverTimeId: (data['overTimeId']),
      });
    });
  }

}
