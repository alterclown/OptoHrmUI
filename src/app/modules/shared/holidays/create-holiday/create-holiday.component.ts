import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { HolidayService } from '../services/holiday.service';

@Component({
  selector: 'app-create-holiday',
  templateUrl: './create-holiday.component.html',
  styleUrls: ['./create-holiday.component.scss']
})
export class CreateHolidayComponent implements OnInit {

  holidayForm: FormGroup;
  constructor(private fb: FormBuilder, private holidayService: HolidayService) {
    this.submitHoliday();
  }

  ngOnInit(): void {
    this.submitHoliday();
  }
  submitHoliday(){
    this.holidayForm = this.fb.group({
     Name:[''],
     Date:[''],
     Status:[''],
     Country:[''],
     EmployeeId:[''],
     CompanyId: Authentication.getCompanyIdFromLocalStorage(),
     UserId: Authentication.getUserIdFromLocalStorage(),
     WorkWeekId:[''],
    });
  }
  onSubmit(){
    this.holidayService.postHoliday(this.holidayForm.value).subscribe(data =>{
      console.log(data);
    });
 }

}
