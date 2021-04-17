import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeSkillService } from '../services/employee-skill.service';

@Component({
  selector: 'app-update-employee-skills',
  templateUrl: './update-employee-skills.component.html',
  styleUrls: ['./update-employee-skills.component.scss']
})
export class UpdateEmployeeSkillsComponent implements OnInit {

  skillForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeSkillService: EmployeeSkillService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitEmployeeSkill();
  }

  ngOnInit(): void {
    this.submitEmployeeSkill();
    this.getEmployeeSkillById();
  }
  submitEmployeeSkill() {
    this.skillForm = this.fb.group({
      EmployeeName:[''],
      EmployeeSkill1:[''],
      Details:['']
      });
  }
  onUpdate() {
    this.employeeSkillService.putEmployeeSkill(this._avRoute.snapshot.params.id, this.skillForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getEmployeeSkillById() {
    this.employeeSkillService.getEmployeeSkillId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.skillForm = this.fb.group({
        EmployeeName: (data['employeeName']),
        EmployeeSkill1: (data['employeeSkill1']),
        Details: (data['details']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage(),
        SkillId: (data['skillId'])
      });
    });
  }

}
