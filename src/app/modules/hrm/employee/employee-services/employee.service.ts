import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {
  }
  _employeeList: Employee[] = [];
  formData: Employee;
  readonly rootURL = 'https://localhost:44306/api/';

  postEmployee(formData) {
    return this.httpClient.post(this.rootURL + 'Employee/PostEmployee', formData);
  }
 
  putEmployee(EmployeeeId, data) {
    return this.httpClient.put(this.rootURL + 'Employee/PutEmployee/'+ EmployeeeId, data);
  }
  deleteEmployee(employeeId: number) {
    return this.httpClient.delete(this.rootURL +'Employee/DeleteById/'+ employeeId);
  }

  getEmployee(){
    return this.httpClient.get(this.rootURL + 'Employee/GetEmployeeList');
  }
  getEmployeeId(employeeId) {
    return this.httpClient.get(this.rootURL +'Employee/GetEmployeeById/'+ employeeId);
  }
}