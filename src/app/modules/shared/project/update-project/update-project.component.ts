import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {

  projectForm: FormGroup;
  constructor(private fb: FormBuilder, private projectService: ProjectService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitProject();
  }

  ngOnInit(): void {
    this.submitProject();
    this.getProjectId();
  }
  submitProject() {
    this.projectForm = this.fb.group({
      ProjectName: [''],
      Client: [''],
      Details: [''],
      Status: ['']
    });
  }
  onUpdate() {
    this.projectService.putProject(this._avRoute.snapshot.params.id, this.projectForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getProjectId() {
    this.projectService.getProjectId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.projectForm = this.fb.group({
        ProjectId: (data['projectId']),
        ProjectName: (data['projectName']),
        Client: (data['client']),
        Details: (data['details']),
        Status: (data['status']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage()
      });
    });
  }

}
