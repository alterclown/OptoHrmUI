import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeDependent } from '../models/EmployeeDependent';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDependentService {
  constructor(private httpClient: HttpClient) {
  }

  _dependentList: EmployeeDependent[] = [];
  formData: EmployeeDependent;
  readonly rootURL = 'https://localhost:44306/api/';

  postEmployeeDependent(formData) {
    return this.httpClient.post(this.rootURL + 'EmployeeDependent/PostEmployeeDependent', formData);
  }
  putEmployeeDependent(EmployeeDependentId, data) {
    return this.httpClient.put(this.rootURL + 'EmployeeDependent/PutEmployeeDependent/'+ EmployeeDependentId, data);
  }
  deleteEmployeeDependent(EmployeeDependentId: number) {
    return this.httpClient.delete(this.rootURL +'EmployeeDependent/DeleteById/'+ EmployeeDependentId);
  }

  getEmployeeDependent(){
    return this.httpClient.get(this.rootURL + 'EmployeeDependent/GetEmployeeDependentList');
  }
  getEmployeeDependentId(EmployeeDependentId) {
    return this.httpClient.get(this.rootURL +'EmployeeDependent/GetEmployeeDependentById/'+ EmployeeDependentId);
  }
}
