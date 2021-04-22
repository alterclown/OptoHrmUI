import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { TrainingSetupService } from '../services/training-setup.service';

@Component({
  selector: 'app-update-training-setup',
  templateUrl: './update-training-setup.component.html',
  styleUrls: ['./update-training-setup.component.scss']
})
export class UpdateTrainingSetupComponent implements OnInit {

  trainingSetupForm: FormGroup;
  constructor(private fb: FormBuilder, private trainingSetupService: TrainingSetupService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitTraining();
  }

  ngOnInit(): void {
    this.submitTraining();
    this.getTrainingSetupId();
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
      Status: ['']
    });
  }
  onUpdate() {
    this.trainingSetupService.putTrainingSetup(this._avRoute.snapshot.params.id, this.trainingSetupForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getTrainingSetupId() {
    this.trainingSetupService.getTrainingSetupId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.trainingSetupForm = this.fb.group({
        TrainingSetupId: (data['trainingSetupId']),
        Code: (data['code']),
        TrainingName: (data['trainingName']),
        Coordinator: (data['coordinator']),
        Trainer: (data['trainer']),
        TraineeName: (data['traineeName']),
        TrainingDetails: (data['trainingDetails']),
        PaymentType: (data['paymentType']),
        Currency: (data['currency']),
        Cost: (data['cost']),
        StartDate: (data['startDate']),
        EndDate: (data['endDate']),
        Status: (data['status']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }

}
