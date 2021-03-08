import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeService } from '../employee-services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder,private employeeService:EmployeeService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitEmployee();
    this.getEmployeeId();
  }
  submitEmployee(){
    this.employeeForm = this.fb.group({
      FirstName: [''],
      LastName:[''],
      BirthDate:[''],
      Age:[''],
      Sex:[''],
      Address:[''],
      JoinDate:[''],
      LeaveDate :[''],
      CompanyId :[''],
      UserId :['']
    });
  }
 getEmployeeId() {
  this.employeeService.getEmployeeId(this._avRoute.snapshot.params.id).subscribe(data => {
    this.employeeForm = this.fb.group({      
      FirstName: (data['firstName']),
      LastName:(data['lastName']),
      BirthDate:(data['birthDate']),
      Age:(data['age']),
      Sex:(data['sex']),
      Address:(data['address']),
      JoinDate:(data['joinDate']),
      LeaveDate :(data['leaveDate']),
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  });
}
onUpdate() {
  this.employeeService.putEmployee(this._avRoute.snapshot.params.id, this.employeeForm.value).subscribe(data => {
    console.log(data);
    //this._router.navigate(['company']);
  });
}

}
