import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeSkillService } from '../services/employee-skill.service';

@Component({
  selector: 'app-create-employee-skills',
  templateUrl: './create-employee-skills.component.html',
  styleUrls: ['./create-employee-skills.component.scss']
})
export class CreateEmployeeSkillsComponent implements OnInit {

  skillForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeSkillService: EmployeeSkillService) {
    this.submitEmployeeSkill();
  }

  ngOnInit(): void {
    this.submitEmployeeSkill();
  }
  submitEmployeeSkill(){
    this.skillForm = this.fb.group({
    EmployeeName:[''],
    EmployeeSkill1:[''],
    Details:[''],
    EmployeeId:[''],
    CompanyId: Authentication.getCompanyIdFromLocalStorage(),
    UserId: Authentication.getUserIdFromLocalStorage(),
    SkillId:[''],
    });
  }
  onSubmit(){
    this.employeeSkillService.postEmployeeSkill(this.skillForm.value).subscribe(data =>{
      console.log(data);
    });
 }

}
