import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { JobTitleService } from '../services/job-title.service';

@Component({
  selector: 'app-update-job-title',
  templateUrl: './update-job-title.component.html',
  styleUrls: ['./update-job-title.component.scss']
})
export class UpdateJobTitleComponent implements OnInit {

  jobTitleForm: FormGroup;
  constructor(private fb: FormBuilder, private jobTitleService: JobTitleService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitJobTitle();
  }

  ngOnInit(): void {
    this.submitJobTitle();
    this.getJobTitleById();
  }
  submitJobTitle() {
    this.jobTitleForm = this.fb.group({
      JobTitleCode: [''],
      JobTitle1: [''],
      Description: [''],
      Specification: ['']
    });
  }
  onUpdate() {
    this.jobTitleService.putJobTitle(this._avRoute.snapshot.params.id, this.jobTitleForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getJobTitleById() {
    this.jobTitleService.getJobTitleId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.jobTitleForm = this.fb.group({
        JobTitleCode: (data['jobTitleCode']),
        JobTitle1: (data['jobTitle1']),
        Description: (data['description']),
        Specification: (data['specification']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage()
      });
    });
  }
}
