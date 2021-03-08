import { Component, OnInit } from '@angular/core';
import { EmployeeLeaveService } from '../employee-leave-services/employee-leave.service';




@Component({
  selector: 'app-employee-leave-list',
  templateUrl: './employee-leave-list.component.html',
  styleUrls: ['./employee-leave-list.component.scss']
})
export class EmployeeLeaveListComponent implements OnInit {
  _leaveList:any;
  next= 0;
  prevous= 0;
  constructor(private leaveService: EmployeeLeaveService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.leaveService.getLeave(this.next).subscribe( data =>{
      debugger
      this._leaveList = data;
    });
  }
  deleteLeave(leaveId: number){
    this.leaveService.deleteLeave(leaveId).subscribe(() => {
      console.log('Deleted!');
    });
    this._leaveList.splice(0,1);
  }

}
