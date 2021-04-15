import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeDeactivateService } from '../services/employee-deactivate.service';

@Component({
  selector: 'app-update-employee-deactivate',
  templateUrl: './update-employee-deactivate.component.html',
  styleUrls: ['./update-employee-deactivate.component.scss']
})
export class UpdateEmployeeDeactivateComponent implements OnInit {

  employeeDeactivateForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeDeactivateService: EmployeeDeactivateService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitEmployeeDeactivate();
    this.getEmployeeDeactivateById();
  }
  getEmployeeDeactivateById() {
    this.employeeDeactivateService.getEmployeeDeactivateId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.employeeDeactivateForm = this.fb.group({
        EmployeeNumber:(data['employeeNumber']),
        FirstName:(data['firstName']),
        LastName:(data['lastName']),
        Department:(data['department']),
        Supervisor:(data['supervisor']),
        EmployeeId:(data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }
  submitEmployeeDeactivate() {
    this.employeeDeactivateForm = this.fb.group({
      EmployeeNumber:[''],
      FirstName:[''],
      LastName:[''],
      Department:[''],
      Supervisor:[''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onUpdate() {
    this.employeeDeactivateService.putEmployeeDeactivate(this._avRoute.snapshot.params.id, this.employeeDeactivateForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
