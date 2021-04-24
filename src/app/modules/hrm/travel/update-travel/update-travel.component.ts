import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-update-travel',
  templateUrl: './update-travel.component.html',
  styleUrls: ['./update-travel.component.scss']
})
export class UpdateTravelComponent implements OnInit {

  travelForm: FormGroup;
  constructor(private fb: FormBuilder, private travelService: TravelService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitTravel();
  }

  ngOnInit(): void {
    this.submitTravel();
    this.getTravelId();
  }
  submitTravel() {
    this.travelForm = this.fb.group({
      MeansofTransportation: [''],
      PurposeofTravel: [''],
      TravelFrom: [''],
      TravelTo: [''],
      TravelDate: [''],
      ReturnDate: [''],
      Notes: [''],
      Currency: [''],
      TotalFundingProposed: [''],
      Attachment: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onUpdate() {
    this.travelService.putTravel(this._avRoute.snapshot.params.id, this.travelForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getTravelId() {
    this.travelService.getTravelId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.travelForm = this.fb.group({
        TravelId: (data['travelId']),
        MeansofTransportation: (data['meansofTransportation']),
        PurposeofTravel: (data['purposeofTravel']),
        TravelFrom: (data['travelFrom']),
        TravelTo: (data['travelTo']),
        TravelDate: (data['travelDate']),
        ReturnDate: (data['returnDate']),
        Notes: (data['notes']),
        Currency: (data['currency']),
        TotalFundingProposed: (data['totalFundingProposed']),
        Attachment: (data['attachment']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }

}
