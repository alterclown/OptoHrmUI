import { Component, OnInit } from '@angular/core';
import { WorkWeekService } from '../services/work-week.service';

@Component({
  selector: 'app-work-week-list',
  templateUrl: './work-week-list.component.html',
  styleUrls: ['./work-week-list.component.scss']
})
export class WorkWeekListComponent implements OnInit {

  _workWeekList: any;
  showSpinner = true;
  constructor(private workWeekService: WorkWeekService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.workWeekService.getWorkWeek().subscribe(data => {
      this._workWeekList = data;
      this.showSpinner = false;
    });
  }
  deleteWorkWeek(workWeekId: number) {
    this.workWeekService.deleteWorkWeek(workWeekId).subscribe(() => {
      console.log('Deleted!');
    });
    this._workWeekList.splice(0, 1);
  }

}
