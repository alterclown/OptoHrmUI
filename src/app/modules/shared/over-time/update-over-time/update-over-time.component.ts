import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { OverTimeService } from '../services/over-time.service';

@Component({
  selector: 'app-update-over-time',
  templateUrl: './update-over-time.component.html',
  styleUrls: ['./update-over-time.component.scss']
})
export class UpdateOverTimeComponent implements OnInit {

  overTimeForm: FormGroup;
  constructor(private fb: FormBuilder, private overTimeService: OverTimeService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitOverTime();
  }

  ngOnInit(): void {
    this.submitOverTime();
    this.getOverTimeById();
  }
  submitOverTime() {
    this.overTimeForm = this.fb.group({
      Category: [''],
      OverTimeName: [''],
      StartTime: [''],
      EndTime: [''],
      Project: [''],
      Notes: ['']
    });
  }
  onUpdate() {
    this.overTimeService.putOverTime(this._avRoute.snapshot.params.id, this.overTimeForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getOverTimeById() {
    this.overTimeService.getOverTimeId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.overTimeForm = this.fb.group({
        OverTimeId: (data['overTimeId']),
        Category: (data['category']),
        OverTimeName: (data['overTimeName']),
        StartTime: (data['startTime']),
        EndTime: (data['endTime']),
        Project: (data['project']),
        Notes: (data['notes']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }

}
