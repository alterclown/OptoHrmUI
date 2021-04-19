import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { WorkWeekService } from '../services/work-week.service';

@Component({
  selector: 'app-create-work-week',
  templateUrl: './create-work-week.component.html',
  styleUrls: ['./create-work-week.component.scss']
})
export class CreateWorkWeekComponent implements OnInit {

  workWeekForm: FormGroup;
  constructor(private fb: FormBuilder, private workWeekService: WorkWeekService) {
    this.submitWorkWek();
  }

  ngOnInit(): void {
    this.submitWorkWek();
  }
  submitWorkWek() {
    this.workWeekForm = this.fb.group({
      Day: [''],
      Status: [''],
      Country: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId:Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.workWeekService.postWorkWeek(this.workWeekForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
