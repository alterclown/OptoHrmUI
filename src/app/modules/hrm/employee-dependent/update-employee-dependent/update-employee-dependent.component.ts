import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeDependentService } from '../services/employee-dependent.service';

@Component({
  selector: 'app-update-employee-dependent',
  templateUrl: './update-employee-dependent.component.html',
  styleUrls: ['./update-employee-dependent.component.scss']
})
export class UpdateEmployeeDependentComponent implements OnInit {

  dependentForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeDependentService: EmployeeDependentService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitEmployeeDeactivate();
    this.getEmployeeDeactivateById();
  }
  getEmployeeDeactivateById() {
    this.employeeDependentService.getEmployeeDependentId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.dependentForm = this.fb.group({
        EmployeeName:(data['employeeName']),
        Name:(data['name']),
        Relationship:(data['relationship']),
        DateofBirth:(data['dateofBirth']),
        IdNumber:(data['idNumber']),
        EmployeeId:(data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }
  submitEmployeeDeactivate() {
    this.dependentForm = this.fb.group({
      EmployeeName: [''],
      Name: [''],
      Relationship: [''],
      DateofBirth: [''],
      IdNumber: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onUpdate() {
    this.employeeDependentService.putEmployeeDependent(this._avRoute.snapshot.params.id, this.dependentForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
