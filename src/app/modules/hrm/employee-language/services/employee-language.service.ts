import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeLanguage } from '../models/employeeLanguage';


@Injectable({
  providedIn: 'root'
})
export class EmployeeLanguageService {
  constructor(private httpClient: HttpClient) {
  }
  
  formData: EmployeeLanguage;
  readonly rootURL = 'https://localhost:44306/api/';

  postEmployeeLanguage(formData) {
    return this.httpClient.post(this.rootURL + 'EmployeeLanguage/PostEmployeeLanguage', formData);
  }
  putEmployeeLanguage(EmployeeLanguageId, data) {
    return this.httpClient.put(this.rootURL + 'EmployeeLanguage/PutEmployeeLanguage/'+ EmployeeLanguageId, data);
  }
  deleteEmployeeLanguage(EmployeeLanguageId: number) {
    return this.httpClient.delete(this.rootURL +'EmployeeLanguage/DeleteById/'+ EmployeeLanguageId);
  }

  getEmployeeLanguage(){
    return this.httpClient.get(this.rootURL + 'EmployeeLanguage/GetEmployeeLanguageList');
  }
  getEmployeeLanguageId(EmployeeLanguageId) {
    return this.httpClient.get(this.rootURL +'EmployeeLanguage/GetEmployeeLanguageById/'+ EmployeeLanguageId);
  }
}
