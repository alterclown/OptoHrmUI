import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeDepartmentService } from '../department-services/department-service';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {
  departmentForm: FormGroup;
  constructor(private fb: FormBuilder,private _departmentService: EmployeeDepartmentService,private _router: Router) {
    this.submitDepartment();
  }

  ngOnInit(): void {
    this.submitDepartment();
  }
  submitDepartment(){
    this.departmentForm = this.fb.group({
      EmployeeId: [''],
      DepartmentName: [''],
      CompanyId :Authentication.getCompanyIdFromLocalStorage(),
      UserId :Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit(){
    this._departmentService.postDepartment(this.departmentForm.value).subscribe(data =>{
      console.log(data);
      //this._router.navigate(['company']);
    });
 }
}
