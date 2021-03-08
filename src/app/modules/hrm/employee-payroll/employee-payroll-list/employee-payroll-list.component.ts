import { Component, OnInit } from '@angular/core';
import { EmployeePayrollService } from '../employee-payroll-services/employee-payroll.service';



@Component({
  selector: 'app-employee-payroll-list',
  templateUrl: './employee-payroll-list.component.html',
  styleUrls: ['./employee-payroll-list.component.scss']
})
export class EmployeePayrollListComponent implements OnInit {
_payList:any;
  constructor(private payService: EmployeePayrollService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.payService.getPayroll().subscribe( data =>{
      this._payList = data;
    });
  }
  deletePayroll(payrollId: number){
    this.payService.deletePayroll(payrollId).subscribe(() => {
      console.log('Deleted!');
    });
    this._payList.splice(0,1);
  }
}
