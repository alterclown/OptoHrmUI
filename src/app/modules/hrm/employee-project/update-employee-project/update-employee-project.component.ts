import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeProjectService } from '../services/employee-project.service';

@Component({
  selector: 'app-update-employee-project',
  templateUrl: './update-employee-project.component.html',
  styleUrls: ['./update-employee-project.component.scss']
})
export class UpdateEmployeeProjectComponent implements OnInit {
  projectForm: FormGroup;
  constructor(private fb: FormBuilder, private projectService: EmployeeProjectService, private _router: Router, private _avRoute: ActivatedRoute){
    this.submitProject();
  }

  ngOnInit(): void {
    this.submitProject();
    this.getProjectById();
  }
  submitProject(){
    this.projectForm = this.fb.group({
      EmployeeProjectName: [''],
      EmployeeName: [''],
      Details: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onUpdate(){
    this.projectService.putEmployeeProject(this._avRoute.snapshot.params.id,this.projectForm.value).subscribe(data =>{
      console.log(data);
    });
 }
 getProjectById() {
  this.projectService.getEmployeeProjectId(this._avRoute.snapshot.params.id).subscribe(data => {
    this.projectForm = this.fb.group({
      EmployeeProjectName: (data['employeeProjectName']),
      EmployeeName: (data['employeeName']),
      Details: (data['details']),
      EmployeeId: (data['employeeId']),
      CompanyId:Authentication.getCompanyIdFromLocalStorage(),
      UserId:Authentication.getUserIdFromLocalStorage()
    });
  });
}

}
