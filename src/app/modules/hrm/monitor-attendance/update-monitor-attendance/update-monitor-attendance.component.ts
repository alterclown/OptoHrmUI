import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { MonitorAttendanceService } from '../services/monitor-attendance.service';

@Component({
  selector: 'app-update-monitor-attendance',
  templateUrl: './update-monitor-attendance.component.html',
  styleUrls: ['./update-monitor-attendance.component.scss']
})
export class UpdateMonitorAttendanceComponent implements OnInit {

  monitorAttendanceForm: FormGroup;
  constructor(private fb: FormBuilder, private monitorAttendanceService: MonitorAttendanceService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitMonitorAttendance();
  }

  ngOnInit(): void {
    this.submitMonitorAttendance();
    this.getMonitorAttendanceId();
  }
  submitMonitorAttendance() {
    this.monitorAttendanceForm = this.fb.group({
      EmployeeName: [''],
      TimeIn: [''],
      TimeOut: [''],
      Note: ['']
    });
  }
  onUpdate() {
    this.monitorAttendanceService.putMonitorAttendance(this._avRoute.snapshot.params.id, this.monitorAttendanceForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getMonitorAttendanceId() {
    this.monitorAttendanceService.getMonitorAttendanceId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.monitorAttendanceForm = this.fb.group({
        MonitorAttendanceId: (data['monitorAttendanceId']),
        EmployeeName: (data['employeeName']),
        TimeIn: (data['timeIn']),
        TimeOut: (data['timeOut']),
        Note: (data['note']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }

}
