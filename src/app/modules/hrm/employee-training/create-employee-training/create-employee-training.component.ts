import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeTrainingService } from '../employee-training-services/employee-training.service';

@Component({
  selector: 'app-create-employee-training',
  templateUrl: './create-employee-training.component.html',
  styleUrls: ['./create-employee-training.component.scss']
})
export class CreateEmployeeTrainingComponent implements OnInit {

  trainingForm: FormGroup;
  
  constructor(private fb: FormBuilder,private trainingService:EmployeeTrainingService) {
    this.submitEmployee();
  }

  ngOnInit(): void {
    this.submitEmployee();
  }
  submitEmployee(){
    this.trainingForm = this.fb.group({
    EmployeeId:[''],
    TrainingProvider:[''],
    Trainee:[''],
    ProjectName:[''],
    TrainingLocation:[''],
    StartDate:[''],
    EndDate:[''],
    Status:[''],
    CompanyId :Authentication.getCompanyIdFromLocalStorage(),
    UserId :Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit(){
    this.trainingService.postTraining(this.trainingForm.value).subscribe(data =>{
      console.log(data);
      //this._router.navigate(['company']);
    })
  }
}
