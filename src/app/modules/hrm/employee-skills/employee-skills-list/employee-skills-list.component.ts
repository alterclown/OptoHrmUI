import { Component, OnInit } from '@angular/core';
import { EmployeeSkillService } from '../services/employee-skill.service';

@Component({
  selector: 'app-employee-skills-list',
  templateUrl: './employee-skills-list.component.html',
  styleUrls: ['./employee-skills-list.component.scss']
})
export class EmployeeSkillsListComponent implements OnInit {

  _skillList: any;
  showSpinner = true;
  constructor(private employeeSkillService: EmployeeSkillService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.employeeSkillService.getEmployeeSkill().subscribe(data => {
      this._skillList = data;
      this.showSpinner = false;
    });
  }
  deleteEmployeeSkill(employeeSkillsId: number) {
    this.employeeSkillService.deleteEmployeeSkill(employeeSkillsId).subscribe(() => {
      console.log('Deleted!');
    });
    this._skillList.splice(0, 1);
  }

}
