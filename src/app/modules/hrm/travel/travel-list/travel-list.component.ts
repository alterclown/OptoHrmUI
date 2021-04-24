import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {

  _travelList: any;
  constructor(private travelService: TravelService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.spinner.show();
    this.travelService.getTravel().subscribe(data => {
      this._travelList = data;
      this.spinner.hide();
    });
  }
  deleteTravel(travelId: number) {
    this.travelService.deleteTravel(travelId).subscribe(() => {
      console.log('Deleted!');
    });
    this._travelList.splice(0, 1);
  }

}
