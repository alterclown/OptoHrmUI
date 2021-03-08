import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeService } from '../employee-services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder,private employeeService:EmployeeService, private _router:Router) {
    this.submitEmployee();
  }

  ngOnInit(): void {
    // let user = JSON.parse(localStorage.getItem('user'));
    // console.log("Test",user.userId);
    this.submitEmployee();
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
      CompanyId :Authentication.getCompanyIdFromLocalStorage(),
      UserId :Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit(){
    this.employeeService.postEmployee(this.employeeForm.value).subscribe(data =>{
      console.log(data);
      this._router.navigate(['employee']);
      
    });
 }

}
