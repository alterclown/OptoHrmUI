import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-create-travel',
  templateUrl: './create-travel.component.html',
  styleUrls: ['./create-travel.component.scss']
})
export class CreateTravelComponent implements OnInit {

  travelForm: FormGroup;
  constructor(private fb: FormBuilder, private travelService: TravelService) {
    this.submitTravel();
  }

  ngOnInit(): void {
    this.submitTravel();
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
  onSubmit() {
    this.travelService.postTravel(this.travelForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
