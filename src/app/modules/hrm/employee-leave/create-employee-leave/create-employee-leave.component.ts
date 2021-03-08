import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeLeaveService } from '../employee-leave-services/employee-leave.service';

@Component({
  selector: 'app-create-employee-leave',
  templateUrl: './create-employee-leave.component.html',
  styleUrls: ['./create-employee-leave.component.scss']
})
export class CreateEmployeeLeaveComponent implements OnInit {

  leaveForm: FormGroup;
  constructor(private fb: FormBuilder, private leaveService: EmployeeLeaveService) {
    this.submitLeave();
  }

  ngOnInit(): void {
    this.submitLeave();
  }
  submitLeave(){
    this.leaveForm = this.fb.group({
    EmployeeId:[''],
    Month:[''],
    StartDate:[''],
    EndDate:[''],
    NoOfDays:[''],
    LeavePeriod:[''],
    CompanyId: Authentication.getCompanyIdFromLocalStorage(),
    UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit(){
    this.leaveService.postLeave(this.leaveForm.value).subscribe(data =>{
      console.log(data);
      //this._router.navigate(['company']);
    });
 }

}
