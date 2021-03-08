import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeAttendanceService } from '../employee-attendance-services/employee-attendance.service';

@Component({
  selector: 'app-create-employee-attendance',
  templateUrl: './create-employee-attendance.component.html',
  styleUrls: ['./create-employee-attendance.component.scss']
})
export class CreateEmployeeAttendanceComponent implements OnInit {
  attendForm: FormGroup;
  constructor(private fb: FormBuilder,private attendanceService: EmployeeAttendanceService) {
    this.submitAttend();
  }

  ngOnInit(): void {
    this.submitAttend();
  }
  submitAttend(){
    this.attendForm = this.fb.group({
      EmployeeId:[''],
      TimeIn:[''],
      TimeOut:[''],
      Count:[''],
      Remarks:[''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit(){
    this.attendanceService.postAttendance(this.attendForm.value).subscribe(data =>{
      console.log(data);
      //this._router.navigate(['company']);
    });
 }

}
