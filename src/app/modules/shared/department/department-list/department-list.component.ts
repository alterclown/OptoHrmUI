import { Component, OnInit } from '@angular/core';
import { EmployeeDepartmentService } from '../department-services/department-service';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  _departmentList:any;

  constructor(private _depatmentService: EmployeeDepartmentService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this._depatmentService.getDepartment().subscribe( data =>{
      this._departmentList = data;
    });
  }
  deleteDepartment(departmentId: number){
    this._depatmentService.deleteDepartment(departmentId).subscribe(() => {
      console.log('Deleted!');
    });
    this._departmentList.splice(0,1);
  }
}
