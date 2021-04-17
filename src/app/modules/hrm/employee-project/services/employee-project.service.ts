import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeProject } from '../models/employeeProject';


@Injectable({
  providedIn: 'root'
})
export class EmployeeProjectService {
  constructor(private httpClient: HttpClient) {
  }

  _employeeProjectDetails: EmployeeProject[] = [];
  formData: EmployeeProject;
  readonly rootURL = 'https://localhost:44306/api/';

  postEmployeeProject(formData) {
    return this.httpClient.post(this.rootURL + 'EmployeeProject/PostEmployeeProject', formData);
  }
  putEmployeeProject(EmployeeProjectId, data) {
    return this.httpClient.put(this.rootURL + 'EmployeeProject/PutEmployeeProject/'+ EmployeeProjectId, data);
  }
  deleteEmployeeProject(EmployeeProjectId: number) {
    return this.httpClient.delete(this.rootURL +'EmployeeProject/DeleteById/'+ EmployeeProjectId);
  }

  getEmployeeProject(){
    return this.httpClient.get(this.rootURL + 'EmployeeProject/GetEmployeeProjectList');
  }
  getEmployeeProjectId(EmployeeProjectId) {
    return this.httpClient.get(this.rootURL +'EmployeeProject/GetEmployeeProjectById/'+ EmployeeProjectId);
  }
}