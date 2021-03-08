import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  _employeeList:any;
  firstName: string;
  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this._employeeService.getEmployee().subscribe( data =>{
      this._employeeList = data;
      //this.firstName = JSON.stringify( data );
    });
  }
  deleteEmployee(employeeId: number){
    this._employeeService.deleteEmployee(employeeId).subscribe(() => {
      console.log('Deleted!');
    });
    this._employeeList.splice(0,1);
  }

}
