import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { MyProjectService } from '../services/my-project.service';

@Component({
  selector: 'app-update-my-project',
  templateUrl: './update-my-project.component.html',
  styleUrls: ['./update-my-project.component.scss']
})
export class UpdateMyProjectComponent implements OnInit {

  myProjectForm: FormGroup;
  constructor(private fb: FormBuilder, private myProjectService: MyProjectService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitMyProject();
  }

  ngOnInit(): void {
    this.submitMyProject();
    this.getMyProjectId();
  }
  submitMyProject() {
    this.myProjectForm = this.fb.group({
      MyProjectName: ['']
    });
  }
  onUpdate() {
    this.myProjectService.putMyProject(this._avRoute.snapshot.params.id, this.myProjectForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getMyProjectId() {
    this.myProjectService.getMyProjectId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.myProjectForm = this.fb.group({
        MyProjectId: (data['myProjectId']),
        MyProjectName: (data['myProjectName']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }

}
