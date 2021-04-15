import { Component, OnInit } from '@angular/core';
import { EmployeeEducationService } from '../services/employee-education.service';

@Component({
  selector: 'app-employee-education-list',
  templateUrl: './employee-education-list.component.html',
  styleUrls: ['./employee-education-list.component.scss']
})
export class EmployeeEducationListComponent implements OnInit {

  _employeeEducationList:any;
  showSpinner = true;
  constructor(private employeeEducationService: EmployeeEducationService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.employeeEducationService.getEmployeeEducation().subscribe( data =>{
      this._employeeEducationList = data;
      this.showSpinner= false;
    });
  }
  deleteEmployeeEducation(employeeEducationId: number){
    this.employeeEducationService.deleteEmployeeEducation(employeeEducationId).subscribe(() => {
      console.log('Deleted!');
    });
    this._employeeEducationList.splice(0,1);
  }
}
