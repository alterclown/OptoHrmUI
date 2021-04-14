import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeCertification } from '../models/employeeCertification';


@Injectable({
  providedIn: 'root'
})
export class EmployeeCertificationService {
  constructor(private httpClient: HttpClient) {
  }

  _certificationList: EmployeeCertification[] = [];
  formData: EmployeeCertification;
  readonly rootURL = 'https://localhost:44306/api/';

  postEmployeeCertification(formData) {
    return this.httpClient.post(this.rootURL + 'EmployeeCertification/PostEmployeeCertification', formData);
  }
  putEmployeeCertification(EmployeeCertificationId, data) {
    return this.httpClient.put(this.rootURL + 'EmployeeCertification/PutEmployeeCertification/'+ EmployeeCertificationId, data);
  }
  deleteEmployeeCertification(EmployeeCertificationId: number) {
    return this.httpClient.delete(this.rootURL +'EmployeeCertification/DeleteById/'+ EmployeeCertificationId);
  }

  getEmployeeCertification(){
    return this.httpClient.get(this.rootURL + 'EmployeeCertification/GetEmployeeCertificationList');
  }
  getEmployeeCertificationId(EmployeeCertificationId) {
    return this.httpClient.get(this.rootURL +'EmployeeCertification/GetEmployeeCertificationById/'+ EmployeeCertificationId);
  }
}
