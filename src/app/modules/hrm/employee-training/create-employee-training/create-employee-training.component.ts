import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { TrainingSetupService } from '../../training-setup/services/training-setup.service';
import { EmployeeTrainingService } from '../employee-training-services/employee-training.service';

@Component({
  selector: 'app-create-employee-training',
  templateUrl: './create-employee-training.component.html',
  styleUrls: ['./create-employee-training.component.scss']
})
export class CreateEmployeeTrainingComponent implements OnInit {
  _trainingList:any;
  trainingForm: FormGroup;
  
  constructor(private fb: FormBuilder,private trainingService:EmployeeTrainingService,private trainingSetupService: TrainingSetupService) {
    this.submitEmployee();
    this.getData();
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
  getData(){
    this.trainingSetupService.getTrainingSetup().subscribe( data =>{
      this._trainingList = data;
    });
  }
}
