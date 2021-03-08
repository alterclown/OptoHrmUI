import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeSalary } from '../models/employeeSalary';


@Injectable({
  providedIn: 'root'
})
export class EmployeeSalaryService {
  constructor(private httpClient: HttpClient) {
  }
  _salaryList: EmployeeSalary[] = [];
  formData: EmployeeSalary;
  readonly rootURL = 'https://localhost:44306/api/';

  postSalary(formData) {
    return this.httpClient.post(this.rootURL + 'Salary/PostSalary', formData);
  }
  putSalary(SalaryId, data) {
    return this.httpClient.put(this.rootURL + 'Salary/PutSalary/'+ SalaryId, data);
  }
  deleteSalary(salaryId: number) {
    return this.httpClient.delete(this.rootURL +'Salary/DeleteById/'+ salaryId);
  }

  getSalary(){
    return this.httpClient.get(this.rootURL + 'Salary/GetSalaryList');
  }
  getSalaryId(salaryId) {
    return this.httpClient.get(this.rootURL +'Salary/GetSalaryById/'+ salaryId);
  }
}