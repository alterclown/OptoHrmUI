import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  projectForm: FormGroup;
  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    this.submitProject();
  }

  ngOnInit(): void {
    this.submitProject();
  }
  submitProject() {
    this.projectForm = this.fb.group({
      ProjectName: [''],
      Client: [''],
      Details: [''],
      Status: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.projectService.postProject(this.projectForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
