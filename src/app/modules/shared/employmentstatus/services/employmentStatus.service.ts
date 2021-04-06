import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmploymentStatus } from '../models/employmentstatus';

@Injectable({
  providedIn: 'root'
})
export class EmploymentStatusService {

  constructor(private http: HttpClient) {
  }

  formData: EmploymentStatus;
  readonly rootURL = 'https://localhost:44306/api/';
  list : EmploymentStatus[];

  postEmploymentStatus(formData) {
    return this.http.post(this.rootURL + 'EmploymentStatus/PostEmploymentStatus', formData);
  }
  putEmploymentStatus(EmploymentStatusId,data) {
    return this.http.put(this.rootURL + 'EmploymentStatus/PutEmploymentStatus/'+ EmploymentStatusId, data);
  }
  deleteEmploymentStatus(EmploymentStatusId) {
    return this.http.delete(this.rootURL +'EmploymentStatus/DeleteById/'+ EmploymentStatusId);
  }

  getEmploymentStatusData(){
    return this.http.get(this.rootURL + 'EmploymentStatus/GetEmploymentStatusList');
  }
  getEmploymentStatusById(EmploymentStatusId) {
    return this.http.get(this.rootURL + 'EmploymentStatus/GetEmploymentStatusById/' + EmploymentStatusId);
  }
}
