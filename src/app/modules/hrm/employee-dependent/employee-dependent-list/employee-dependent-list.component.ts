import { Component, OnInit } from '@angular/core';
import { EmployeeDependentService } from '../services/employee-dependent.service';

@Component({
  selector: 'app-employee-dependent-list',
  templateUrl: './employee-dependent-list.component.html',
  styleUrls: ['./employee-dependent-list.component.scss']
})
export class EmployeeDependentListComponent implements OnInit {

  _employeeDependentList:any;
  showSpinner = true;
  constructor(private employeeDependentService: EmployeeDependentService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.employeeDependentService.getEmployeeDependent().subscribe( data =>{
      this._employeeDependentList = data;
      this.showSpinner= false;
    });
  }
  deleteEmployeeDependent(employeeDependentId: number){
    this.employeeDependentService.deleteEmployeeDependent(employeeDependentId).subscribe(() => {
      console.log('Deleted!');
    });
    this._employeeDependentList.splice(0,1);
  }

}
