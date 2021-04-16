import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeLeave } from '../models/employeeLeave';


@Injectable({
  providedIn: 'root'
})
export class EmployeeLeaveService {
  constructor(private httpClient: HttpClient) {
  }
  formData: EmployeeLeave;
  readonly rootURL = 'https://localhost:44306/api/';

  postEmployeeLeave(formData) {
    return this.httpClient.post(this.rootURL + 'EmployeeLeave/PostEmployeeLeave', formData);
  }
  putEmployeeLeave(EmployeeLeaveId,data) {
    return this.httpClient.put(this.rootURL + 'EmployeeLeave/PutEmployeeLeave/'+ EmployeeLeaveId,data);
  }
  deleteEmployeeLeave(EmployeeLeaveId: number) {
    return this.httpClient.delete(this.rootURL +'EmployeeLeave/DeleteById/'+ EmployeeLeaveId);
  }

  getEmployeeLeave(){
    return this.httpClient.get(this.rootURL + 'EmployeeLeave/GetEmployeeLeaveList');
  }
  getEmployeeLeaveId(EmployeeLeaveId) {
    return this.httpClient.get(this.rootURL +'EmployeeLeave/GetEmployeeLeaveById/'+ EmployeeLeaveId);
  }
}
