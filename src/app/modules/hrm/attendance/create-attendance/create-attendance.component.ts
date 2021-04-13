import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-create-attendance',
  templateUrl: './create-attendance.component.html',
  styleUrls: ['./create-attendance.component.scss']
})
export class CreateAttendanceComponent implements OnInit {

  attendanceForm: FormGroup;
  constructor(private fb: FormBuilder, private attendanceService: AttendanceService, private _router: Router) {
    this.submitAttendance();
  }

  ngOnInit(): void {
    this.submitAttendance();
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
  onSubmit() {
    this.attendanceService.postAttendance(this.attendanceForm.value).subscribe(data => {
      console.log(data);

    });
  }

}
