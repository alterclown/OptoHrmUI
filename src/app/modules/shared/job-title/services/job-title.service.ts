import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { JobTitle } from '../models/job-title';

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {
  constructor(private httpClient: HttpClient) {
  }
  formData: JobTitle;
  readonly rootURL = 'https://localhost:44306/api/';

  postJobTitle(formData) {
    return this.httpClient.post(this.rootURL + 'JobTitle/PostJobTitle', formData);
  }
  putJobTitle(JobTitleId,data) {
    return this.httpClient.put(this.rootURL + 'JobTitle/PutJobTitle/'+ JobTitleId,data);
  }
  deleteJobTitle(JobTitleId: number) {
    return this.httpClient.delete(this.rootURL +'JobTitle/DeleteById/'+ JobTitleId);
  }

  getJobTitle(){
    return this.httpClient.get(this.rootURL + 'JobTitle/GetJobTitleList');
  }
  getJobTitleId(JobTitleId) {
    return this.httpClient.get(this.rootURL +'JobTitle/GetJobTitleById/'+ JobTitleId);
  }
}
