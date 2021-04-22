import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrainingSessionService } from '../services/training-session.service';

@Component({
  selector: 'app-training-session-list',
  templateUrl: './training-session-list.component.html',
  styleUrls: ['./training-session-list.component.scss']
})
export class TrainingSessionListComponent implements OnInit {

  _trainingSessionList: any;
  constructor(private trainingSessionService: TrainingSessionService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.spinner.show();
    this.trainingSessionService.getTrainingSession().subscribe(data => {
      this._trainingSessionList = data;
      this.spinner.hide();
    });
  }
  deleteTrainingSession(trainingSessionId: number) {
    this.trainingSessionService.deleteTrainingSession(trainingSessionId).subscribe(() => {
      console.log('Deleted!');
    });
    this._trainingSessionList.splice(0, 1);
  }

}
