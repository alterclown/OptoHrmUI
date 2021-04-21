import { Component, OnInit } from '@angular/core';
import { OverTimeRequestService } from '../services/over-time-request.service';

@Component({
  selector: 'app-over-time-request-list',
  templateUrl: './over-time-request-list.component.html',
  styleUrls: ['./over-time-request-list.component.scss']
})
export class OverTimeRequestListComponent implements OnInit {

  _overTimeRequestList: any;
  showSpinner = true;
  constructor(private overTimeRequestService: OverTimeRequestService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.overTimeRequestService.getOverTimeRequest().subscribe(data => {
      this._overTimeRequestList = data;
      this.showSpinner = false;
    });
  }
  deleteOverTimeRequest(overTimeRequestId: number) {
    this.overTimeRequestService.deleteOverTimeRequest(overTimeRequestId).subscribe(() => {
      console.log('Deleted!');
    });
    this._overTimeRequestList.splice(0, 1);
  }

}
