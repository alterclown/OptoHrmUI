import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Project } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {
  }
  formData: Project;
  readonly rootURL = 'https://localhost:44306/api/';

  postProject(formData) {
    return this.httpClient.post(this.rootURL + 'Project/PostProject', formData);
  }
  putProject(ProjectId,data) {
    return this.httpClient.put(this.rootURL + 'Project/PutProject/'+ ProjectId,data);
  }
  deleteProject(ProjectId: number) {
    return this.httpClient.delete(this.rootURL +'Project/DeleteById/'+ ProjectId);
  }

  getProject(){
    return this.httpClient.get(this.rootURL + 'Project/GetProjectList');
  }
  getProjectId(ProjectId) {
    return this.httpClient.get(this.rootURL +'Project/GetProjectById/'+ ProjectId);
  }
}
