import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/modules/hrm/employee/employee-services/employee.service';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { WorkWeekService } from '../../work-week/services/work-week.service';
import { HolidayService } from '../services/holiday.service';

@Component({
  selector: 'app-create-holiday',
  templateUrl: './create-holiday.component.html',
  styleUrls: ['./create-holiday.component.scss']
})
export class CreateHolidayComponent implements OnInit {

  _employeeList:any;
  _workWeekList:any;

  holidayForm: FormGroup;
  constructor(private fb: FormBuilder, private holidayService: HolidayService, private _employeeService: EmployeeService, private workWeekService: WorkWeekService) {
    this.submitHoliday();
  }

  ngOnInit(): void {
    this.submitHoliday();
    this.getEmployeeForDropdown();
    this.getWorkWeekForDropdown();
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

 getEmployeeForDropdown(){
  this._employeeService.getEmployee().subscribe( data =>{
    this._employeeList = data;
    console.log('employeelist', this._employeeList);
    
    //this.firstName = JSON.stringify( data );
  });
}

getWorkWeekForDropdown() {
  this.workWeekService.getWorkWeek().subscribe(data => {
    this._workWeekList = data;
    console.log('weeklist', this._workWeekList);
    
  });
}

}
