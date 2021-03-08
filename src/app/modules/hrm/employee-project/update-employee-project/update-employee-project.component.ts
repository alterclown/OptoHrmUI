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
    EmployeeId:[''],
    ProjectName:[''],
    DateStarted:[''],
    DateEnded:[''],
    Status:[''],
    CompanyId:Authentication.getCompanyIdFromLocalStorage(),
    UserId:Authentication.getUserIdFromLocalStorage()
    });
  }
  onUpdate(){
    this.projectService.putProject(this._avRoute.snapshot.params.id,this.projectForm.value).subscribe(data =>{
      console.log(data);
      //this._router.navigate(['company']);
    });
 }
 getProjectById() {
  this.projectService.getProjectId(this._avRoute.snapshot.params.id).subscribe(data => {
    this.projectForm = this.fb.group({
      EmployeeId: (data['employeeId']),
      ProjectName: (data['projectName']),
      DateStarted: (data['dateStarted']),
      DateEnded: (data['dateEnded']),
      Status: (data['status']),
      CompanyId:Authentication.getCompanyIdFromLocalStorage(),
      UserId:Authentication.getUserIdFromLocalStorage()
    });
  });
}

}
