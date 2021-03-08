import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeTrainingService } from '../employee-training-services/employee-training.service';

@Component({
  selector: 'app-update-employee-training',
  templateUrl: './update-employee-training.component.html',
  styleUrls: ['./update-employee-training.component.scss']
})
export class UpdateEmployeeTrainingComponent implements OnInit {

  trainingForm: FormGroup;
  constructor(private fb: FormBuilder, private trainingService: EmployeeTrainingService, private _router: Router, private _avRoute: ActivatedRoute){
    this.submitTraining();
  }

  ngOnInit(): void {
    this.submitTraining();
    this.getTrainingById();
  }
  submitTraining(){
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
  onUpdate(){
    this.trainingService.putTraining(this._avRoute.snapshot.params.id,this.trainingForm.value).subscribe(data =>{
      console.log(data);
      //this._router.navigate(['company']);
    });
 }
 getTrainingById() {
  this.trainingService.getTrainingId(this._avRoute.snapshot.params.id).subscribe(data => {
    this.trainingForm = this.fb.group({
      EmployeeId: (data['employeeId']),
      TrainingProvider: (data['trainingProvider']),
      Trainee: (data['trainee']),
      ProjectName: (data['projectName']),
      TrainingLocation: (data['trainingLocation']),
      StartDate: (data['startDate']),
      EndDate: (data['endDate']),
      Status: (data['status']),
      CompanyId :Authentication.getCompanyIdFromLocalStorage(),
      UserId :Authentication.getUserIdFromLocalStorage()
    });
  });
}

}
