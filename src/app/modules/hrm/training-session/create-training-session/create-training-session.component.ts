import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { TrainingSessionService } from '../services/training-session.service';

@Component({
  selector: 'app-create-training-session',
  templateUrl: './create-training-session.component.html',
  styleUrls: ['./create-training-session.component.scss']
})
export class CreateTrainingSessionComponent implements OnInit {

  trainingSessionForm: FormGroup;
  constructor(private fb: FormBuilder, private trainingSessionService: TrainingSessionService) {
    this.submitTraining();
  }

  ngOnInit(): void {
    this.submitTraining();
  }
  submitTraining() {
    this.trainingSessionForm = this.fb.group({
    Course: [''],
    TrainingName: [''],
    Details: [''],
    ScheduledTime: [''],
    AssignmentDueDate: [''],
    DeliveryMethod: [''],
    DeliveryLocation: [''],
    AttendanceType: [''],
    AttendanceStatus: [''],
    AttendanceFeedback: [''],
    ProofOfCompletion: [''],
    Attachment: [''],
    TrainingCertificate: [''],
    EmployeeId: [''],
    TrainingSetupId: [''],
    CompanyId: Authentication.getCompanyIdFromLocalStorage(),
    UserId: Authentication.getUserIdFromLocalStorage(),
    });
  }
  onSubmit() {
    this.trainingSessionService.postTrainingSession(this.trainingSessionForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
