import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeEducationService } from '../services/employee-education.service';

@Component({
  selector: 'app-create-employee-education',
  templateUrl: './create-employee-education.component.html',
  styleUrls: ['./create-employee-education.component.scss']
})
export class CreateEmployeeEducationComponent implements OnInit {

  employeeEducationForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeEducationService: EmployeeEducationService) {
    this.submitEmployeeEducation();
  }

  ngOnInit(): void {
    this.submitEmployeeEducation();
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
  onSubmit() {
    this.employeeEducationService.postEmployeeEducation(this.employeeEducationForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
