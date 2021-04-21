import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { MyProjectService } from '../services/my-project.service';

@Component({
  selector: 'app-create-my-project',
  templateUrl: './create-my-project.component.html',
  styleUrls: ['./create-my-project.component.scss']
})
export class CreateMyProjectComponent implements OnInit {

  myProjectForm: FormGroup;
  constructor(private fb: FormBuilder, private myProjectService: MyProjectService) {
    this.submitMyProject();
  }

  ngOnInit(): void {
    this.submitMyProject();
  }
  submitMyProject() {
    this.myProjectForm = this.fb.group({
      MyProjectName: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.myProjectService.postMyProject(this.myProjectForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
