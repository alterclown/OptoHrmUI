import { Component, OnInit } from '@angular/core';
import { LeavePeriodService } from '../services/leave-period.service';

@Component({
  selector: 'app-leave-period-list',
  templateUrl: './leave-period-list.component.html',
  styleUrls: ['./leave-period-list.component.scss']
})
export class LeavePeriodListComponent implements OnInit {

  _leavePeriodList: any;
  showSpinner = true;
  constructor(private leavePeriodService: LeavePeriodService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.leavePeriodService.getLeavePeriod().subscribe(data => {
      this._leavePeriodList = data;
      this.showSpinner = false;
    });
  }
  deleteLeavePeriod(leavePeriodId: number) {
    this.leavePeriodService.deleteLeavePeriod(leavePeriodId).subscribe(() => {
      console.log('Deleted!');
    });
    this._leavePeriodList.splice(0, 1);
  }
}
