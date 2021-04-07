import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.scss']
})
export class UpdateExpenseComponent implements OnInit {
  expenseForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router,private expenseService:ExpenseService, private _avRoute:ActivatedRoute) {
    this.submitExpense();
  }

  ngOnInit(): void {
    this.submitExpense();
    this.getExpenseData();
  }
  submitExpense() {
    this.expenseForm = this.fb.group({
      ExpenseName: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId:Authentication.getUserIdFromLocalStorage()
    });
  }

  getExpenseData() {
    this.expenseService.getExpenseById(this._avRoute.snapshot.params.id).subscribe(data => {
      console.log(data)
      this.expenseForm = this.fb.group({
        ExpenseName: (data['expenseName']),
      });
    });
  }
  
    onUpdate(){
      this.expenseService.putExpense(this._avRoute.snapshot.params.id,this.expenseForm.value).subscribe(data =>{
        console.log(data);
      });
   }
}
