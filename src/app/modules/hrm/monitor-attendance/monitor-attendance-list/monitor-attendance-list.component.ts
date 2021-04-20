import { Component, OnInit } from '@angular/core';
import { MonitorAttendanceService } from '../services/monitor-attendance.service';

@Component({
  selector: 'app-monitor-attendance-list',
  templateUrl: './monitor-attendance-list.component.html',
  styleUrls: ['./monitor-attendance-list.component.scss']
})
export class MonitorAttendanceListComponent implements OnInit {

  _monitorAttendanceList: any;
  showSpinner = true;
  constructor(private monitorAttendanceService: MonitorAttendanceService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.monitorAttendanceService.getMonitorAttendance().subscribe(data => {
      this._monitorAttendanceList = data;
      this.showSpinner = false;
    });
  }
  deleteMonitorAttendance(monitorAttendanceId: number) {
    this.monitorAttendanceService.deleteMonitorAttendance(monitorAttendanceId).subscribe(() => {
      console.log('Deleted!');
    });
    this._monitorAttendanceList.splice(0, 1);
  }

}
