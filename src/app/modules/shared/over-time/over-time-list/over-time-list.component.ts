import { Component, OnInit } from '@angular/core';
import { OverTimeService } from '../services/over-time.service';

@Component({
  selector: 'app-over-time-list',
  templateUrl: './over-time-list.component.html',
  styleUrls: ['./over-time-list.component.scss']
})
export class OverTimeListComponent implements OnInit {

  _overTimeList: any;
  showSpinner = true;
  constructor(private overTimeService: OverTimeService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.overTimeService.getOverTime().subscribe(data => {
      this._overTimeList = data;
      this.showSpinner = false;
    });
  }
  deleteOverTime(overTimeId: number) {
    this.overTimeService.deleteOverTime(overTimeId).subscribe(() => {
      console.log('Deleted!');
    });
    this._overTimeList.splice(0, 1);
  }
}
