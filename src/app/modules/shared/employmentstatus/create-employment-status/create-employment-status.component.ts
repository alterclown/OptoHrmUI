import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmploymentStatusService } from '../services/employmentStatus.service';

@Component({
  selector: 'app-create-employment-status',
  templateUrl: './create-employment-status.component.html',
  styleUrls: ['./create-employment-status.component.scss']
})
export class CreateEmploymentStatusComponent implements OnInit {
  employmentStatusForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router,private employmentStatusService:EmploymentStatusService) {
    this.submitClient();
  }

  ngOnInit(): void {
    this.submitClient();
  }
  submitClient() {
    this.employmentStatusForm = this.fb.group({
      EmploymentStatusName:[''],
      Description:[''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage()
    });
  }
    onSubmit(){
      this.employmentStatusService.postEmploymentStatus(this.employmentStatusForm.value).subscribe(data =>{
        console.log(data);
        //this._router.navigate(['employee']);
      });
   }


}
