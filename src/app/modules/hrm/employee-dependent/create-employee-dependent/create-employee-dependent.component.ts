import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeDependentService } from '../services/employee-dependent.service';

@Component({
  selector: 'app-create-employee-dependent',
  templateUrl: './create-employee-dependent.component.html',
  styleUrls: ['./create-employee-dependent.component.scss']
})
export class CreateEmployeeDependentComponent implements OnInit {

  dependentForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeDependentService: EmployeeDependentService) {
    this.submitEmployeeDependent();
  }

  ngOnInit(): void {
    this.submitEmployeeDependent();
  }
  submitEmployeeDependent() {
    this.dependentForm = this.fb.group({
      EmployeeName: [''],
      Name: [''],
      Relationship: [''],
      DateofBirth: [''],
      IdNumber: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.employeeDependentService.postEmployeeDependent(this.dependentForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
