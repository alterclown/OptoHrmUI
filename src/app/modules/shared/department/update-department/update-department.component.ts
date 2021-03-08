import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeDepartmentService } from '../department-services/department-service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {
  departmentForm: FormGroup;
  constructor(private fb: FormBuilder, private _departmentService: EmployeeDepartmentService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDepartmentParamData();
    this.submitDepartment();
  }
  
  submitDepartment() {
    this.departmentForm = this.fb.group({
      EmployeeId: [''],
      DepartmentName: [''],
      CompanyId :Authentication.getCompanyIdFromLocalStorage(),
      UserId :Authentication.getUserIdFromLocalStorage()
    });
  }
  getDepartmentParamData(){
    this._departmentService.getDepartmentId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.departmentForm = this.fb.group({
      EmployeeId: (data['employeeId']),
      DepartmentName: (data['departmentName']),
      CompanyId :Authentication.getCompanyIdFromLocalStorage(),
      UserId :Authentication.getUserIdFromLocalStorage()
      });
    });
  }

  onUpdate() {
    this._departmentService.putDepartment(this._avRoute.snapshot.params.id,this.departmentForm.value).subscribe(data => {
      console.log(data);
      this._router.navigate(['dashboard']);
    });
    //this._router.navigate(['/company']);
  }

}
