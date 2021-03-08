import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeSalaryService } from '../employee-salary-services/employee-salary.service';

@Component({
  selector: 'app-create-employee-salary',
  templateUrl: './create-employee-salary.component.html',
  styleUrls: ['./create-employee-salary.component.scss']
})
export class CreateEmployeeSalaryComponent implements OnInit {
  salaryForm: FormGroup;
  constructor(private fb: FormBuilder, private salaryService:EmployeeSalaryService) {
    this.submitEmployee();
  }

  ngOnInit(): void {
    this.submitEmployee();
  }
  submitEmployee(){
    this.salaryForm = this.fb.group({
      EmployeeId: [''],
      SalaryAmount:[''],
      Tax:[''],
      Status:[''],
      CompanyId :Authentication.getCompanyIdFromLocalStorage(),
      UserId :Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit(){
    this.salaryService.postSalary(this.salaryForm.value).subscribe(data =>{
      console.log(data);
      //this._router.navigate(['company']);
    })
  }

}
