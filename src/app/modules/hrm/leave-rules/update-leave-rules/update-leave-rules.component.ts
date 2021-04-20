import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { LeaveRulesService } from '../services/leave-rule.service';

@Component({
  selector: 'app-update-leave-rules',
  templateUrl: './update-leave-rules.component.html',
  styleUrls: ['./update-leave-rules.component.scss']
})
export class UpdateLeaveRulesComponent implements OnInit {

  leaveRulesForm: FormGroup;
  constructor(private fb: FormBuilder, private leaveRulesService: LeaveRulesService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitLeaveRules();
  }

  ngOnInit(): void {
    this.submitLeaveRules();
    this.getLeaveRulesId();
  }
  submitLeaveRules() {
    this.leaveRulesForm = this.fb.group({
      LeaveGroup: [''],
      JobTitle: [''],
      EmploymentStatus: [''],
      EmployeeName: [''],
      Experience: [''],
      LeavePerYear: ['']
    });
  }
  onUpdate() {
    this.leaveRulesService.putLeaveRules(this._avRoute.snapshot.params.id, this.leaveRulesForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getLeaveRulesId() {
    this.leaveRulesService.getLeaveRulesId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.leaveRulesForm = this.fb.group({
      LeaveRulesId: (data['leaveRulesId']),
      LeaveGroup: (data['leaveGroup']),
      JobTitle: (data['jobTitle']),
      EmploymentStatus: (data['employmentStatus']),
      EmployeeName: (data['employeeName']),
      Experience: (data['experience']),
      LeavePerYear: (data['leavePerYear']),
      EmployeeId: (data['employeeId']),
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage(),
      LeaveTypeId: (data['leaveTypeId']),
      JobTitleId: (data['jobTitleId']),
      });
    });
  }

}
