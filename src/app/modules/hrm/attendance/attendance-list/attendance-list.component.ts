import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent implements OnInit {
  _attendanceList:any;
  constructor(private  attendanceService: AttendanceService,) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.attendanceService.getAttendance().subscribe( data =>{
      this._attendanceList = data;
      //this.firstName = JSON.stringify( data );
    });
  }
  deleteAttendance(attendanceId: number){
    this.attendanceService.deleteAttendance(attendanceId).subscribe(() => {
      console.log('Deleted!');
    });
    this._attendanceList.splice(0,1);
  }

}
