import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeExpenseService } from '../services/employee-expense.service';

@Component({
  selector: 'app-create-employee-expense',
  templateUrl: './create-employee-expense.component.html',
  styleUrls: ['./create-employee-expense.component.scss']
})
export class CreateEmployeeExpenseComponent implements OnInit {

  employeeExpenseForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeExpenseService: EmployeeExpenseService) {
    this.submitEmployeeExpense();
  }

  ngOnInit(): void {
    this.submitEmployeeExpense();
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
  onSubmit() {
    this.employeeExpenseService.postEmployeeExpense(this.employeeExpenseForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
