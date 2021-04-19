import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { WorkWeekService } from '../services/work-week.service';

@Component({
  selector: 'app-update-work-week',
  templateUrl: './update-work-week.component.html',
  styleUrls: ['./update-work-week.component.scss']
})
export class UpdateWorkWeekComponent implements OnInit {

  workWeekForm: FormGroup;
  constructor(private fb: FormBuilder, private workWeekService: WorkWeekService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitWorkWeek();
  }

  ngOnInit(): void {
    this.submitWorkWeek();
    this.getWorkWeekId();
  }
  submitWorkWeek() {
    this.workWeekForm = this.fb.group({
      Day: [''],
      Status: [''],
      Country: ['']
    });
  }
  onUpdate() {
    this.workWeekService.putWorkWeek(this._avRoute.snapshot.params.id, this.workWeekForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getWorkWeekId() {
    this.workWeekService.getWorkWeekId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.workWeekForm = this.fb.group({
        WorkWeekId: (data['workWeekId']),
        Day: (data['day']),
        Status: (data['status']),
        Country: (data['country']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }
}
