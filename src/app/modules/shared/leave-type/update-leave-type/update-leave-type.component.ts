import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { LeaveTypeService } from '../services/leave-type.service';

@Component({
  selector: 'app-update-leave-type',
  templateUrl: './update-leave-type.component.html',
  styleUrls: ['./update-leave-type.component.scss']
})
export class UpdateLeaveTypeComponent implements OnInit {

  leaveTypeForm: FormGroup;
  constructor(private fb: FormBuilder, private leaveTypeService: LeaveTypeService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitLeaveType();
  }

  ngOnInit(): void {
    this.submitLeaveType();
    this.getLeaveTypeById();
  }
  submitLeaveType() {
    this.leaveTypeForm = this.fb.group({
      LeaveName: [''],
      LeaveEnabled: [''],
      LeaveForward: [''],
      LeavePerYear: [''],
      LeaveGroup: ['']
    });
  }
  onUpdate() {
    this.leaveTypeService.putLeaveType(this._avRoute.snapshot.params.id, this.leaveTypeForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getLeaveTypeById() {
    this.leaveTypeService.getLeaveTypeId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.leaveTypeForm = this.fb.group({
        LeaveName: (data['leaveName']),
        LeaveEnabled: (data['leaveEnabled']),
        LeaveForward: (data['leaveForward']),
        LeavePerYear: (data['leavePerYear']),
        LeaveGroup: (data['leaveGroup']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }

}
