import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeLeaveService } from '../employee-leave-services/employee-leave.service';

@Component({
  selector: 'app-update-employee-leave',
  templateUrl: './update-employee-leave.component.html',
  styleUrls: ['./update-employee-leave.component.scss']
})
export class UpdateEmployeeLeaveComponent implements OnInit {

  leaveForm: FormGroup;
  constructor(private fb: FormBuilder, private leaveService: EmployeeLeaveService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitLeave();
  }

  ngOnInit(): void {
    this.submitLeave();
    this.getLeaveById();
  }
  submitLeave() {
    this.leaveForm = this.fb.group({
      EmployeeId: [''],
      Month: [''],
      StartDate: [''],
      EndDate: [''],
      NoOfDays: [''],
      LeavePeriod: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onUpdate() {
    this.leaveService.putLeave(this._avRoute.snapshot.params.id, this.leaveForm.value).subscribe(data => {
      console.log(data);
      //this._router.navigate(['company']);
    });
  }
  getLeaveById() {
    this.leaveService.getLeaveId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.leaveForm = this.fb.group({
        EmployeeId: (data['employeeId']),
        Month: (data['month']),
        StartDate: (data['startDate']),
        EndDate: (data['endDate']),
        NoOfDays: (data['noOfDays']),
        LeavePeriod: (data['leavePeriod']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }
}
