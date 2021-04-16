import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeExpense } from '../models/enployeeExpense';


@Injectable({
  providedIn: 'root'
})
export class EmployeeExpenseService {
  constructor(private httpClient: HttpClient) {
  }
  
  formData: EmployeeExpense;
  readonly rootURL = 'https://localhost:44306/api/';

  postEmployeeExpense(formData) {
    return this.httpClient.post(this.rootURL + 'EmployeeExpense/PostEmployeeExpense', formData);
  }
  putEmployeeExpense(EmployeeExpenseId, data) {
    return this.httpClient.put(this.rootURL + 'EmployeeExpense/PutEmployeeExpense/'+ EmployeeExpenseId, data);
  }
  deleteEmployeeExpense(EmployeeExpenseId: number) {
    return this.httpClient.delete(this.rootURL +'EmployeeExpense/DeleteById/'+ EmployeeExpenseId);
  }

  getEmployeeExpense(){
    return this.httpClient.get(this.rootURL + 'EmployeeExpense/GetEmployeeExpenseList');
  }
  getEmployeeExpenseId(EmployeeExpenseId) {
    return this.httpClient.get(this.rootURL +'EmployeeExpense/GetEmployeeExpenseById/'+ EmployeeExpenseId);
  }
}
