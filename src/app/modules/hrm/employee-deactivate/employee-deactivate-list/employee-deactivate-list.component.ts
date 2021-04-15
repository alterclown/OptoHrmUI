import { Component, OnInit } from '@angular/core';
import { EmployeeDeactivateService } from '../services/employee-deactivate.service';

@Component({
  selector: 'app-employee-deactivate-list',
  templateUrl: './employee-deactivate-list.component.html',
  styleUrls: ['./employee-deactivate-list.component.scss']
})
export class EmployeeDeactivateListComponent implements OnInit {
  _employeeDeactivateList:any;
  showSpinner = true;
  constructor(private employeeDeactivateService: EmployeeDeactivateService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.employeeDeactivateService.getEmployeeDeactivate().subscribe( data =>{
      this._employeeDeactivateList = data;
      this.showSpinner= false;
    });
  }
  deleteEmployeeDeactivate(employeeDeactivatedId: number){
    this.employeeDeactivateService.deleteEmployeeDeactivate(employeeDeactivatedId).subscribe(() => {
      console.log('Deleted!');
    });
    this._employeeDeactivateList.splice(0,1);
  }
}
