import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EducationService } from '../services/education.service';

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.scss']
})
export class CreateEducationComponent implements OnInit {
  educationForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router,private educationService:EducationService) {
    this.submitClient();
  }

  ngOnInit(): void {
    this.submitClient();
  }
  submitClient() {
    this.educationForm = this.fb.group({
      EducationName:[''],
      Description:[''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage()
    });
  }
    onSubmit(){
      this.educationService.postEducation(this.educationForm.value).subscribe(data =>{
        console.log(data);
        //this._router.navigate(['employee']);
      });
   }

}
