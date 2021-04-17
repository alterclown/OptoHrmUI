import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  expenseList:any;
  showSpinner = true;
  constructor(private expenseService:ExpenseService,private _router: Router) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.expenseService.getExpenseData().subscribe( data =>{
      this.expenseList = data;
      this.showSpinner = false;
    });
  }
  deleteExpense(expenseId){
    this.expenseService.deleteExpense(expenseId).subscribe(() => {
      console.log('Deleted!');
    });
    this.expenseList.splice(0,1);
  }
}
