import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) {
  }

  formData: Expense;
  readonly rootURL = 'https://localhost:44306/api/';
  list : Expense[];

  postExpense(formData) {
    return this.http.post(this.rootURL + 'Expense/PostExpense', formData);
  }
  putExpense(ExpenseId,data) {
    return this.http.put(this.rootURL + 'Expense/PutExpense/'+ ExpenseId, data);
  }
  deleteExpense(ExpenseId) {
    return this.http.delete(this.rootURL +'Expense/DeleteById/'+ ExpenseId);
  }

  getExpenseData(){
    return this.http.get(this.rootURL + 'Expense/GetExpenseList');
  }
  getExpenseById(ExpenseId) {
    return this.http.get(this.rootURL + 'Expense/GetExpenseById/' + ExpenseId);
  }
}
