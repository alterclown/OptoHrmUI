import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrainingSetupService } from '../services/training-setup.service';

@Component({
  selector: 'app-training-setup-list',
  templateUrl: './training-setup-list.component.html',
  styleUrls: ['./training-setup-list.component.scss']
})
export class TrainingSetupListComponent implements OnInit {

  _trainingSetupList: any;
  constructor(private trainingSetupService: TrainingSetupService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.spinner.show();
    this.trainingSetupService.getTrainingSetup().subscribe(data => {
      this._trainingSetupList = data;
      this.spinner.hide();
    });
  }
  deleteTrainingSetup(trainingSetupId: number) {
    this.trainingSetupService.deleteTrainingSetup(trainingSetupId).subscribe(() => {
      console.log('Deleted!');
    });
    this._trainingSetupList.splice(0, 1);
  }

}
