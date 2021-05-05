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
  currentPage = 1;
  previousPage = 0;
  nextPage = 0;
  pageDataLimit = 10;
  pageIndex: number;
  pageSize: number;
  totalPages: number;
  constructor(private attendanceService: AttendanceService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.spinner.show();
    this.attendanceService.getAttendance(this.currentPage, this.pageDataLimit).subscribe(res => {
      this._attendanceList = res['data'],
        this.pageIndex = res['pageNumber'],
        this.pageSize = res['pageSize'],
        this.totalPages = res['totalPages']
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
    if (this.pageIndex === 1 || this.pageIndex > 1) {
      this.nextPage = ++this.pageIndex;
      this.spinner.show();
      this.attendanceService.getAttendance(this.nextPage, this.pageDataLimit).subscribe(res => {
        this._attendanceList = res['data']
        this.spinner.hide();
      });
    }
  }

  handlePreviousPage(e: any) {
    if (this.pageIndex > 1) {
      this.previousPage = --this.pageIndex;
      this.spinner.show();
      this.attendanceService.getAttendance(this.previousPage, this.pageDataLimit).subscribe(res => {
        this._attendanceList = res['data']
        this.spinner.hide();
      });
    }
  }

  handlePreviousOrNextPage(e: any) {
    if (this.currentPage === 1 || this.currentPage > 1) {
      this.nextPage = ++this.currentPage;
      this.spinner.show();
      this.attendanceService.getAttendance(this.nextPage, this.pageDataLimit).subscribe(res => {
        this._attendanceList = res['data']
        this.spinner.hide();
      });
    } else if (this.nextPage > 1 && this.nextPage === this.currentPage) {
      this.previousPage = --this.currentPage;
      this.spinner.show();
      this.attendanceService.getAttendance(this.previousPage, this.pageDataLimit).subscribe(res => {
        this._attendanceList = res['data']
        this.spinner.hide();
      });
    }
  }
}
