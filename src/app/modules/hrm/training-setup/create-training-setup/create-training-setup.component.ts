import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { TrainingSetupService } from '../services/training-setup.service';

@Component({
  selector: 'app-create-training-setup',
  templateUrl: './create-training-setup.component.html',
  styleUrls: ['./create-training-setup.component.scss']
})
export class CreateTrainingSetupComponent implements OnInit {

  trainingSetupForm: FormGroup;
  constructor(private fb: FormBuilder, private trainingSetupService: TrainingSetupService) {
    this.submitTraining();
  }

  ngOnInit(): void {
    this.submitTraining();
  }
  submitTraining() {
    this.trainingSetupForm = this.fb.group({
      Code: [''],
      TrainingName: [''],
      Coordinator: [''],
      Trainer: [''],
      TraineeName: [''],
      TrainingDetails: [''],
      PaymentType: [''],
      Currency: [''],
      Cost: [''],
      StartDate: [''],
      EndDate: [''],
      Status: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.trainingSetupService.postTrainingSetup(this.trainingSetupForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
