import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeProjectService } from '../services/employee-project.service';

@Component({
  selector: 'app-create-employee-project',
  templateUrl: './create-employee-project.component.html',
  styleUrls: ['./create-employee-project.component.scss']
})
export class CreateEmployeeProjectComponent implements OnInit {
  projectForm: FormGroup;
  constructor(private fb: FormBuilder, private projectService: EmployeeProjectService) {
    this.submitProject();
  }

  ngOnInit(): void {
    this.submitProject();
  }
  submitProject(){
    this.projectForm = this.fb.group({
    EmployeeProjectName:[''],
    EmployeeName:[''],
    Details:[''],
    EmployeeId:[''],
    CompanyId:Authentication.getCompanyIdFromLocalStorage(),
    UserId:Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit(){
    this.projectService.postEmployeeProject(this.projectForm.value).subscribe(data =>{
      console.log(data);
    });
 }

}
