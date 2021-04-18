import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../services/leave-type.service';

@Component({
  selector: 'app-leave-type-list',
  templateUrl: './leave-type-list.component.html',
  styleUrls: ['./leave-type-list.component.scss']
})
export class LeaveTypeListComponent implements OnInit {

  _leaveTypeList: any;
  showSpinner = true;
  constructor(private leaveTypeService: LeaveTypeService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.leaveTypeService.getLeaveType().subscribe(data => {
      this._leaveTypeList = data;
      this.showSpinner = false;
    });
  }
  deleteLeaveType(employeeSkillsId: number) {
    this.leaveTypeService.deleteLeaveType(employeeSkillsId).subscribe(() => {
      console.log('Deleted!');
    });
    this._leaveTypeList.splice(0, 1);
  }

}
