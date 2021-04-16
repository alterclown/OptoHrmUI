import { Component, OnInit } from '@angular/core';
import { EmployeeLeaveService } from '../employee-leave-services/employee-leave.service';

@Component({
  selector: 'app-employee-leave-list',
  templateUrl: './employee-leave-list.component.html',
  styleUrls: ['./employee-leave-list.component.scss']
})
export class EmployeeLeaveListComponent implements OnInit {
  _leaveList: any;
  showSpinner = true;
  constructor(private leaveService: EmployeeLeaveService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.leaveService.getEmployeeLeave().subscribe(data => {
      this._leaveList = data;
      this.showSpinner = false;
    });
  }
  deleteLeave(employeeLeaveId: number) {
    this.leaveService.deleteEmployeeLeave(employeeLeaveId).subscribe(() => {
      console.log('Deleted!');
    });
    this._leaveList.splice(0, 1);
  }

}
