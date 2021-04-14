import { Component, OnInit } from '@angular/core';
import { EmployeeCertificationService } from '../services/employee-certification.service';

@Component({
  selector: 'app-employee-certification-list',
  templateUrl: './employee-certification-list.component.html',
  styleUrls: ['./employee-certification-list.component.scss']
})
export class EmployeeCertificationListComponent implements OnInit {
  _employeeCertificationList:any;
  constructor(private employeeCertificationService: EmployeeCertificationService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.employeeCertificationService.getEmployeeCertification().subscribe( data =>{
      this._employeeCertificationList = data;
    });
  }
  deleteEmployeeCertification(employeeCertificationId: number){
    this.employeeCertificationService.deleteEmployeeCertification(employeeCertificationId).subscribe(() => {
      console.log('Deleted!');
    });
    this._employeeCertificationList.splice(0,1);
  }
}
