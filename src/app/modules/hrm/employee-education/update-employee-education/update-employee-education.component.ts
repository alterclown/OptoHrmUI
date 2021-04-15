import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeEducationService } from '../services/employee-education.service';

@Component({
  selector: 'app-update-employee-education',
  templateUrl: './update-employee-education.component.html',
  styleUrls: ['./update-employee-education.component.scss']
})
export class UpdateEmployeeEducationComponent implements OnInit {

  employeeEducationForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeEducationService: EmployeeEducationService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitEmployeeEducation();
    this.getEmployeeEducationById();
  }
  getEmployeeEducationById() {
    this.employeeEducationService.getEmployeeEducationId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.employeeEducationForm = this.fb.group({
      EmployeeName:(data['employeeName']),
      Institute:(data['institute']),
      StartDate:(data['startDate']),
      CompletedOn:(data['completedOn']),
      EducationId:(data['educationId']),
      EmployeeId:(data['employeeId']),
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }
  submitEmployeeEducation() {
    this.employeeEducationForm = this.fb.group({
      EmployeeName: [''],
      Institute: [''],
      StartDate: [''],
      CompletedOn: [''],
      EducationId: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onUpdate() {
    this.employeeEducationService.putEmployeeEducation(this._avRoute.snapshot.params.id, this.employeeEducationForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
