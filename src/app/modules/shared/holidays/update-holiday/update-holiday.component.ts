import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { HolidayService } from '../services/holiday.service';

@Component({
  selector: 'app-update-holiday',
  templateUrl: './update-holiday.component.html',
  styleUrls: ['./update-holiday.component.scss']
})
export class UpdateHolidayComponent implements OnInit {

  holidayForm: FormGroup;
  constructor(private fb: FormBuilder, private holidayService: HolidayService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitHoliday();
  }

  ngOnInit(): void {
    this.submitHoliday();
    this.getHolidayById();
  }
  submitHoliday() {
    this.holidayForm = this.fb.group({
      Name: [''],
      Date: [''],
      Status: [''],
      Country: ['']
    });
  }
  onUpdate() {
    this.holidayService.putHoliday(this._avRoute.snapshot.params.id, this.holidayForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getHolidayById() {
    this.holidayService.getHolidayId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.holidayForm = this.fb.group({
        Name: (data['name']),
        Date: (data['date']),
        Status: (data['status']),
        Country: (data['country']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage(),
        WorkWeekId: (data['workWeekId']),
      });
    });
  }

}
