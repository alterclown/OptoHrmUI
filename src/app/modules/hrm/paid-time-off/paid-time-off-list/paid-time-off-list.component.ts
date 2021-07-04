import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PaidTimeOffService } from '../services/paid-time.service';

@Component({
  selector: 'app-paid-time-off-list',
  templateUrl: './paid-time-off-list.component.html',
  styleUrls: ['./paid-time-off-list.component.scss']
})
export class PaidTimeOffListComponent implements OnInit {

  _paidTimeList: any;
  constructor(private paidTimeOffService: PaidTimeOffService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.spinner.show();
    this.paidTimeOffService.getPaidTimeOff().subscribe(data => {
      this._paidTimeList = data;
      this.spinner.hide();
    });
  }
  deletePaidTimeOff(myProjectId: number) {
    this.paidTimeOffService.deletePaidTimeOff(myProjectId).subscribe(() => {
      console.log('Deleted!');
    });
    this._paidTimeList.splice(0, 1);
  }
}
