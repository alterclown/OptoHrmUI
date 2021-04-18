import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { LeaveTypeService } from '../services/leave-type.service';

@Component({
  selector: 'app-create-leave-type',
  templateUrl: './create-leave-type.component.html',
  styleUrls: ['./create-leave-type.component.scss']
})
export class CreateLeaveTypeComponent implements OnInit {

  leaveTypeForm: FormGroup;
  constructor(private fb: FormBuilder, private leaveTypeService: LeaveTypeService) {
    this.submitLeaveType();
  }

  ngOnInit(): void {
    this.submitLeaveType();
  }
  submitLeaveType(){
    this.leaveTypeForm = this.fb.group({
    LeaveName:[''],
    LeaveEnabled:[''],
    LeaveForward:[''],
    LeavePerYear:[''],
    LeaveGroup:[''],
    EmployeeId:[''],
    CompanyId:Authentication.getCompanyIdFromLocalStorage(),
    UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit(){
    this.leaveTypeService.postLeaveType(this.leaveTypeForm.value).subscribe(data =>{
      console.log(data);
    });
 }

}
