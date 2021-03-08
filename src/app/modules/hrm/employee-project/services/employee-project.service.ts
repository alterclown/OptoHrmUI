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

  postProject(formData) {
    return this.httpClient.post(this.rootURL + 'Project/PostProject', formData);
  }
  putProject(ProjectHandleId, data) {
    return this.httpClient.put(this.rootURL + 'Project/PutProject/'+ ProjectHandleId, data);
  }
  deleteProject(projectHandleId: number) {
    return this.httpClient.delete(this.rootURL +'Project/DeleteById/'+ projectHandleId);
  }

  getProject(){
    return this.httpClient.get(this.rootURL + 'Project/GetProjectList');
  }
  getProjectId(projectHandleId) {
    return this.httpClient.get(this.rootURL +'Project/GetProjectById/'+ projectHandleId);
  }
}