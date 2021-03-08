import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeAttendanceService } from '../employee-attendance-services/employee-attendance.service';

@Component({
  selector: 'app-update-attendance',
  templateUrl: './update-attendance.component.html',
  styleUrls: ['./update-attendance.component.scss']
})
export class UpdateAttendanceComponent implements OnInit {
  attendForm: FormGroup;
  constructor(private fb: FormBuilder, private attendanceService: EmployeeAttendanceService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitAttendance();
    this.getAttendanceById();
  }
  getAttendanceById() {
    this.attendanceService.getAttendanceId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.attendForm = this.fb.group({
        EmployeeId: (data['employeeId']),
        TimeIn: (data['timeIn']),
        TimeOut: (data['timeOut']),
        Count: (data['count']),
        Remarks: (data['remarks']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }
  submitAttendance() {
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
  onUpdate() {
    this.attendanceService.putAttendance(this._avRoute.snapshot.params.id, this.attendForm.value).subscribe(data => {
      console.log(data);
      //this._router.navigate(['company']);
    });
  }

}
