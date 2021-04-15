import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeEducation } from '../models/employeeEducation';


@Injectable({
  providedIn: 'root'
})
export class EmployeeEducationService {
  constructor(private httpClient: HttpClient) {
  }

  _employeeEducationList: EmployeeEducation[] = [];
  formData: EmployeeEducation;
  readonly rootURL = 'https://localhost:44306/api/';

  postEmployeeEducation(formData) {
    return this.httpClient.post(this.rootURL + 'EmployeeEducation/PostEmployeeEducation', formData);
  }
  putEmployeeEducation(EmployeeEducationId, data) {
    return this.httpClient.put(this.rootURL + 'EmployeeEducation/PutEmployeeEducation/'+ EmployeeEducationId, data);
  }
  deleteEmployeeEducation(EmployeeEducationId: number) {
    return this.httpClient.delete(this.rootURL +'EmployeeEducation/DeleteById/'+ EmployeeEducationId);
  }

  getEmployeeEducation(){
    return this.httpClient.get(this.rootURL + 'EmployeeEducation/GetEmployeeEducationList');
  }
  getEmployeeEducationId(EmployeeEducationId) {
    return this.httpClient.get(this.rootURL +'EmployeeEducation/GetEmployeeEducationById/'+ EmployeeEducationId);
  }
}
