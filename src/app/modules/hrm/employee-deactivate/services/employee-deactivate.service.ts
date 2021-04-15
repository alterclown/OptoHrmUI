import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeDeactivate } from '../models/employeeDeactivate';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDeactivateService {
  constructor(private httpClient: HttpClient) {
  }

  _certificationList: EmployeeDeactivate[] = [];
  formData: EmployeeDeactivate;
  readonly rootURL = 'https://localhost:44306/api/';

  postEmployeeDeactivate(formData) {
    return this.httpClient.post(this.rootURL + 'EmployeeDeactivate/PostEmployeeDeactivate', formData);
  }
  putEmployeeDeactivate(EmployeeDeactivateId, data) {
    return this.httpClient.put(this.rootURL + 'EmployeeDeactivate/PutEmployeeDeactivate/'+ EmployeeDeactivateId, data);
  }
  deleteEmployeeDeactivate(EmployeeDeactivatedId: number) {
    return this.httpClient.delete(this.rootURL +'EmployeeDeactivate/DeleteById/'+ EmployeeDeactivatedId);
  }

  getEmployeeDeactivate(){
    return this.httpClient.get(this.rootURL + 'EmployeeDeactivate/GetEmployeeDeactivateList');
  }
  getEmployeeDeactivateId(EmployeeDeactivatedId) {
    return this.httpClient.get(this.rootURL +'EmployeeDeactivate/GetEmployeeDeactivateById/'+ EmployeeDeactivatedId);
  }
}
