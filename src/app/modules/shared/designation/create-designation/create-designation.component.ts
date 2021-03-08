import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeDesignationService } from '../designation-services/designation-service';

@Component({
  selector: 'app-create-designation',
  templateUrl: './create-designation.component.html',
  styleUrls: ['./create-designation.component.scss']
})
export class CreateDesignationComponent implements OnInit {
  designationForm: FormGroup;  

  constructor(private fb: FormBuilder,private _designationService: EmployeeDesignationService,private _router: Router) {
    this.submitDesignantion();
  }

  ngOnInit(): void {
    this.submitDesignantion();
  }
  submitDesignantion(){
    this.designationForm = this.fb.group({
      EmployeeId: [''],
      PositionName: [''],
      CompanyId :Authentication.getCompanyIdFromLocalStorage(),
      UserId :Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit(){
    this._designationService.postDesignation(this.designationForm.value).subscribe(data =>{
      console.log(data);
      //this._router.navigate(['company']);
    });
 }
}
