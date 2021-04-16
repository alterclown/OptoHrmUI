import { Component, OnInit } from '@angular/core';
import { EmployeeExpenseService } from '../services/employee-expense.service';

@Component({
  selector: 'app-employee-expense-list',
  templateUrl: './employee-expense-list.component.html',
  styleUrls: ['./employee-expense-list.component.scss']
})
export class EmployeeExpenseListComponent implements OnInit {

  _employeeExpenseList:any;
  showSpinner = true;
  constructor(private employeeExpenseService: EmployeeExpenseService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.employeeExpenseService.getEmployeeExpense().subscribe( data =>{
      this._employeeExpenseList = data;
      this.showSpinner= false;
    });
  }
  deleteEmployeeExpense(employeeExpenseId: number){
    this.employeeExpenseService.deleteEmployeeExpense(employeeExpenseId).subscribe(() => {
      console.log('Deleted!');
    });
    this._employeeExpenseList.splice(0,1);
  }

}
