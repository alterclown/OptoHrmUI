import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss']
})
export class CreateExpenseComponent implements OnInit {
  expenseForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router, private expenseService:ExpenseService) {
    this.submitExpense();
  }

  ngOnInit(): void {
    this.submitExpense();
  }
  submitExpense() {
    this.expenseForm = this.fb.group({
      ExpenseName: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId:Authentication.getUserIdFromLocalStorage()
    });
  }
    onSubmit(){
      this.expenseService.postExpense(this.expenseForm.value).subscribe(data =>{
        console.log(data);
        //this._router.navigate(['']);
      });
   }
}
