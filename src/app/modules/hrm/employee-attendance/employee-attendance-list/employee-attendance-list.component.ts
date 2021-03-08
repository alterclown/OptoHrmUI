import { Component, OnInit } from '@angular/core';
import { EmployeeAttendanceService } from '../employee-attendance-services/employee-attendance.service';

@Component({
  selector: 'app-employee-attendance-list',
  templateUrl: './employee-attendance-list.component.html',
  styleUrls: ['./employee-attendance-list.component.css']
})
export class EmployeeAttendanceListComponent implements OnInit {

  _attendanceList:any;
  constructor(private attendanceService: EmployeeAttendanceService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.attendanceService.getAttendance().subscribe( data =>{
      this._attendanceList = data;
    });
  }
  deleteAttendance(employeeAttendanceId: number){
    this.attendanceService.deleteAttendance(employeeAttendanceId).subscribe(() => {
      console.log('Deleted!');
    });
    this._attendanceList.splice(0,1);
  }
  
}
