import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeExpenseService } from '../services/employee-expense.service';

@Component({
  selector: 'app-update-employee-expense',
  templateUrl: './update-employee-expense.component.html',
  styleUrls: ['./update-employee-expense.component.scss']
})
export class UpdateEmployeeExpenseComponent implements OnInit {

  employeeExpenseForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeExpenseService: EmployeeExpenseService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitEmployeeExpense();
    this.getEmployeeExpenseById();
  }
  getEmployeeExpenseById() {
    this.employeeExpenseService.getEmployeeExpenseId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.employeeExpenseForm = this.fb.group({
        EmployeeName: (data['employeeName']),
        Date: (data['date']),
        PaymentMethod: (data['paymentMethod']),
        TransactionNo: (data['transactionNo']),
        Payee: (data['payee']),
        Category: (data['category']),
        Amount: (data['amount']),
        Currency: (data['currency']),
        Status: (data['status']),
        Notes: (data['notes']),
        Attachment: (data['attachment']),
        EmployeeId: (data['employeeId']),
        ExpenseId: (data['expenseId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage(),
        PaymentMethodId: (data['paymentMethodId']),
      });
    });
  }
  submitEmployeeExpense() {
    this.employeeExpenseForm = this.fb.group({
      EmployeeName: [''],
      Date: [''],
      PaymentMethod: [''],
      TransactionNo: [''],
      Payee: [''],
      Category: [''],
      Amount: [''],
      Currency: [''],
      Status: [''],
      Notes: [''],
      Attachment: [''],
      EmployeeId: [''],
      ExpenseId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage(),
      PaymentMethodId: [''],
    });
  }
  onUpdate() {
    this.employeeExpenseService.putEmployeeExpense(this._avRoute.snapshot.params.id, this.employeeExpenseForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
