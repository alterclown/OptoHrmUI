import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { TrainingSessionService } from '../services/training-session.service';

@Component({
  selector: 'app-update-training-session',
  templateUrl: './update-training-session.component.html',
  styleUrls: ['./update-training-session.component.scss']
})
export class UpdateTrainingSessionComponent implements OnInit {

  trainingSessionForm: FormGroup;
  constructor(private fb: FormBuilder, private trainingSessionService: TrainingSessionService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitTraining();
  }

  ngOnInit(): void {
    this.submitTraining();
    this.getTrainingSessionId();
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
      TrainingCertificate: ['']
    });
  }
  onUpdate() {
    this.trainingSessionService.putTrainingSession(this._avRoute.snapshot.params.id, this.trainingSessionForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getTrainingSessionId() {
    this.trainingSessionService.getTrainingSessionId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.trainingSessionForm = this.fb.group({
        TrainingSessionId: (data['trainingSessionId']),
        Course: (data['course']),
        TrainingName: (data['trainingName']),
        Details: (data['details']),
        ScheduledTime: (data['scheduledTime']),
        AssignmentDueDate: (data['assignmentDueDate']),
        DeliveryMethod: (data['deliveryMethod']),
        DeliveryLocation: (data['deliveryLocation']),
        AttendanceType: (data['attendanceType']),
        AttendanceStatus: (data['attendanceStatus']),
        AttendanceFeedback: (data['attendanceFeedback']),
        ProofOfCompletion: (data['proofOfCompletion']),
        Attachment: (data['attachment']),
        TrainingCertificate: (data['trainingCertificate']),
        EmployeeId: (data['employeeId']),
        TrainingSetupId: (data['trainingSetupId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage(),
      });
    });
  }

}
