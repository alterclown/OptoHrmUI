import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeSalaryService } from '../employee-salary-services/employee-salary.service';

@Component({
  selector: 'app-update-employee-salary',
  templateUrl: './update-employee-salary.component.html',
  styleUrls: ['./update-employee-salary.component.scss']
})
export class UpdateEmployeeSalaryComponent implements OnInit {

  salaryForm: FormGroup;
  constructor(private fb: FormBuilder, private salaryService: EmployeeSalaryService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitSalary();
  }

  ngOnInit(): void {
    this.submitSalary();
    this.getSalaryId();
  }
  submitSalary() {
    this.salaryForm = this.fb.group({
      EmployeeId: [''],
      SalaryAmount:[''],
      Tax:[''],
      Status:[''],
      CompanyId :Authentication.getCompanyIdFromLocalStorage(),
      UserId :Authentication.getUserIdFromLocalStorage()
    });
  }
  onUpdate() {
    this.salaryService.putSalary(this._avRoute.snapshot.params.id, this.salaryForm.value).subscribe(data => {
      console.log(data);
      //this._router.navigate(['company']);
    });
  }
  getSalaryId() {
    this.salaryService.getSalaryId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.salaryForm = this.fb.group({
        EmployeeId: (data['employeeId']),
        SalaryAmount: (data['salaryAmount']),
        Tax: (data['tax']),
        Status: (data['status']),
        CompanyId :Authentication.getCompanyIdFromLocalStorage(),
        UserId :Authentication.getUserIdFromLocalStorage()
      });
    });
  }

}
