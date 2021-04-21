import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MyProject } from '../models/myProject';

@Injectable({
  providedIn: 'root'
})
export class MyProjectService {
  constructor(private httpClient: HttpClient) {
  }
  formData: MyProject;
  readonly rootURL = 'https://localhost:44306/api/';

  postMyProject(formData) {
    return this.httpClient.post(this.rootURL + 'MyProject/PostMyProject', formData);
  }
  putMyProject(MyProjectId,data) {
    return this.httpClient.put(this.rootURL + 'MyProject/PutMyProject/'+ MyProjectId,data);
  }
  deleteMyProject(MyProjectId: number) {
    return this.httpClient.delete(this.rootURL +'MyProject/DeleteById/'+ MyProjectId);
  }

  getMyProject(){
    return this.httpClient.get(this.rootURL + 'MyProject/GetMyProjectList');
  }
  getMyProjectId(MyProjectId) {
    return this.httpClient.get(this.rootURL +'MyProject/GetMyProjectById/'+ MyProjectId);
  }
}
