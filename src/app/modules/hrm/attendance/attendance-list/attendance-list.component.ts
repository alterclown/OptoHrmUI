import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent implements OnInit {
  _attendanceList: any;
  pageNumber = 1;
  page: any;
  pageDataLimit = 10;
  constructor(private attendanceService: AttendanceService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.spinner.show();
    this.attendanceService.getAttendance(this.pageNumber, this.pageDataLimit).subscribe(data => {
      this._attendanceList = data;
    });
    this.spinner.hide();
  }
  deleteAttendance(attendanceId: number) {
    this.attendanceService.deleteAttendance(attendanceId).subscribe(() => {
      console.log('Deleted!');
    });
    this._attendanceList.splice(0, 1);
  }
  handleNextPage(e: any) {
    if (this.pageNumber > 0) {
      this.page = this.pageNumber++;
      this.spinner.show();
      this.attendanceService.getAttendance(this.page, this.pageDataLimit).subscribe(data => {
        this._attendanceList = data;
      });
      this.spinner.hide();
    }
  }

  handlePreviousPage(e: any) {
    if (this.pageNumber > 1 && this.pageNumber != 0) {
      this.page = this.pageNumber--;
      this.spinner.show();
      this.attendanceService.getAttendance(this.page, this.pageDataLimit).subscribe(data => {
        this._attendanceList = data;
      });
      this.spinner.hide();
    }
  }
}
