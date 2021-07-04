import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { ProjectService } from 'src/app/modules/shared/project/services/project.service';
import { EmployeeProjectService } from '../services/employee-project.service';

@Component({
  selector: 'app-create-employee-project',
  templateUrl: './create-employee-project.component.html',
  styleUrls: ['./create-employee-project.component.scss']
})
export class CreateEmployeeProjectComponent implements OnInit {
  projectForm: FormGroup;
  _projectList: any;
  constructor(private fb: FormBuilder, private projectService: EmployeeProjectService, private loadProject: ProjectService) {
    this.submitProject();
    this.getData();
  }

  ngOnInit(): void {
    this.submitProject();
  }
  submitProject() {
    this.projectForm = this.fb.group({
      EmployeeProjectName: [''],
      EmployeeName: [''],
      Details: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.projectService.postEmployeeProject(this.projectForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getData() {
    this.loadProject.getProject().subscribe(data => {
      this._projectList = data;
    });
  }

}
