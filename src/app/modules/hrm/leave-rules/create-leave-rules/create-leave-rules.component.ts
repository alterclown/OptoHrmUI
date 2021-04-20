import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { LeaveRulesService } from '../services/leave-rule.service';

@Component({
  selector: 'app-create-leave-rules',
  templateUrl: './create-leave-rules.component.html',
  styleUrls: ['./create-leave-rules.component.scss']
})
export class CreateLeaveRulesComponent implements OnInit {

  leaveRulesForm: FormGroup;
  constructor(private fb: FormBuilder, private leaveRulesService: LeaveRulesService) {
    this.submitLeaveRulesForm();
  }

  ngOnInit(): void {
    this.submitLeaveRulesForm();
  }
  submitLeaveRulesForm() {
    this.leaveRulesForm = this.fb.group({
      LeaveGroup: [''],
      JobTitle: [''],
      EmploymentStatus: [''],
      EmployeeName: [''],
      Experience: [''],
      LeavePerYear: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage(),
      LeaveTypeId: [''],
      JobTitleId: [''],
    });
  }
  onSubmit() {
    this.leaveRulesService.postLeaveRules(this.leaveRulesForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
