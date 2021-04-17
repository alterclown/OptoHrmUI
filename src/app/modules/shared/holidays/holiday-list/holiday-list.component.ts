import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../services/holiday.service';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent implements OnInit {
  _holidayList: any;
  showSpinner = true;
  constructor(private holidayService: HolidayService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.holidayService.getHoliday().subscribe(data => {
      this._holidayList = data;
      this.showSpinner = false;
    });
  }
  deleteHoliday(holidaysId: number) {
    this.holidayService.deleteHoliday(holidaysId).subscribe(() => {
      console.log('Deleted!');
    });
    this._holidayList.splice(0, 1);
  }
}
