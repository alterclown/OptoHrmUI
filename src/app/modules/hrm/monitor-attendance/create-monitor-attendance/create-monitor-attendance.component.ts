import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { MonitorAttendanceService } from '../services/monitor-attendance.service';

@Component({
  selector: 'app-create-monitor-attendance',
  templateUrl: './create-monitor-attendance.component.html',
  styleUrls: ['./create-monitor-attendance.component.scss']
})
export class CreateMonitorAttendanceComponent implements OnInit {

  monitorAttendanceForm: FormGroup;
  constructor(private fb: FormBuilder, private monitorAttendanceService: MonitorAttendanceService) {
    this.submitMonitorAttendance();
  }

  ngOnInit(): void {
    this.submitMonitorAttendance();
  }
  submitMonitorAttendance() {
    this.monitorAttendanceForm = this.fb.group({
      EmployeeName: [''],
      TimeIn: [''],
      TimeOut: [''],
      Note: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.monitorAttendanceService.postMonitorAttendance(this.monitorAttendanceForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
