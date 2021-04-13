import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-update-attendance',
  templateUrl: './update-attendance.component.html',
  styleUrls: ['./update-attendance.component.scss']
})
export class UpdateAttendanceComponent implements OnInit {

  attendanceForm: FormGroup;
  constructor(private fb: FormBuilder, private attendanceService: AttendanceService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitAttendance();
    this.getAttendanceId();
  }
  submitAttendance() {
    this.attendanceForm = this.fb.group({
      TimeIn: [''],
      TimeOut: [''],
      Note: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  getAttendanceId() {
    this.attendanceService.getAttendanceId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.attendanceForm = this.fb.group({
        TimeIn: (data['timeIn']),
        TimeOut: (data['timeOut']),
        Note: (data['note']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }
  onUpdate() {
    this.attendanceService.putAttendance(this._avRoute.snapshot.params.id, this.attendanceForm.value).subscribe(data => {
      console.log(data);
      this._router.navigate(['attendance']);
    });
  }

}
