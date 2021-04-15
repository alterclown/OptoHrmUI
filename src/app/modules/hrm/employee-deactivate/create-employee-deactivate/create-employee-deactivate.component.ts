import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeDeactivateService } from '../services/employee-deactivate.service';

@Component({
  selector: 'app-create-employee-deactivate',
  templateUrl: './create-employee-deactivate.component.html',
  styleUrls: ['./create-employee-deactivate.component.scss']
})
export class CreateEmployeeDeactivateComponent implements OnInit {
  employeeDeactivateForm: FormGroup;
  constructor(private fb: FormBuilder,private employeeDeactivateService: EmployeeDeactivateService) {
    this.submitEmployeeDeactivate();
  }

  ngOnInit(): void {
    this.submitEmployeeDeactivate();
  }
  submitEmployeeDeactivate(){
    this.employeeDeactivateForm = this.fb.group({
      EmployeeNumber:[''],
      FirstName:[''],
      LastName:[''],
      Department:[''],
      Supervisor:[''],
      EmployeeId:[''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit(){
    this.employeeDeactivateService.postEmployeeDeactivate(this.employeeDeactivateForm.value).subscribe(data =>{
      console.log(data);
    });
 }
}
