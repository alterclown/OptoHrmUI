import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmploymentStatusService } from 'src/app/modules/shared/employmentstatus/services/employmentStatus.service';
import { LeaveTypeService } from 'src/app/modules/shared/leave-type/services/leave-type.service';
import { EmployeeService } from '../../employee/employee-services/employee.service';
import { LeaveRulesService } from '../services/leave-rule.service';

@Component({
  selector: 'app-create-leave-rules',
  templateUrl: './create-leave-rules.component.html',
  styleUrls: ['./create-leave-rules.component.scss']
})
export class CreateLeaveRulesComponent implements OnInit {

  leaveRulesForm: FormGroup;
  statusList: any;
  employeeList: any;
  leavList: any;
  constructor(private fb: FormBuilder, private leaveRulesService: LeaveRulesService, private status: EmploymentStatusService, private employee: EmployeeService, private leave: LeaveTypeService) {
    this.submitLeaveRulesForm();
    this.getStatusData();
    this.getEmployeeData();
    this.getLeaveData();
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
  getStatusData() {
    this.status.getEmploymentStatusData().subscribe(data => {
      this.statusList = data;
    });
  }
  getEmployeeData() {
    this.employee.getEmployee().subscribe(data => {
      this.employeeList = data;
    });
  }
  getLeaveData() {
    this.leave.getLeaveType().subscribe(data => {
      this.leavList = data;
    });
  }

}
