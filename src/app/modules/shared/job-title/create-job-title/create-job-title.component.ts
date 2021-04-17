import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { JobTitleService } from '../services/job-title.service';

@Component({
  selector: 'app-create-job-title',
  templateUrl: './create-job-title.component.html',
  styleUrls: ['./create-job-title.component.scss']
})
export class CreateJobTitleComponent implements OnInit {

  jobTitleForm: FormGroup;
  constructor(private fb: FormBuilder, private jobTitleService: JobTitleService) {
    this.submitJobTitle();
  }

  ngOnInit(): void {
    this.submitJobTitle();
  }
  submitJobTitle(){
    this.jobTitleForm = this.fb.group({
    JobTitleCode:[''],
    JobTitle1:[''],
    Description:[''],
    Specification:[''],
    CompanyId:Authentication.getCompanyIdFromLocalStorage()
    });
  }
  onSubmit(){
    this.jobTitleService.postJobTitle(this.jobTitleForm.value).subscribe(data =>{
      console.log(data);
    });
 }

}
