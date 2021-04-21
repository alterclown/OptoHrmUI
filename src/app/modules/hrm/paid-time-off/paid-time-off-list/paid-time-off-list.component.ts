import { Component, OnInit } from '@angular/core';
import { PaidTimeOffService } from '../services/paid-time.service';

@Component({
  selector: 'app-paid-time-off-list',
  templateUrl: './paid-time-off-list.component.html',
  styleUrls: ['./paid-time-off-list.component.scss']
})
export class PaidTimeOffListComponent implements OnInit {

  _paidTimeList: any;
  showSpinner = true;
  constructor(private paidTimeOffService: PaidTimeOffService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.paidTimeOffService.getPaidTimeOff().subscribe(data => {
      this._paidTimeList = data;
      this.showSpinner = false;
    });
  }
  deletePaidTimeOff(myProjectId: number) {
    this.paidTimeOffService.deletePaidTimeOff(myProjectId).subscribe(() => {
      console.log('Deleted!');
    });
    this._paidTimeList.splice(0, 1);
  }
}
