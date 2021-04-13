import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeArchive } from '../models/employee-archive';


@Injectable({
  providedIn: 'root'
})
export class EmployeeArchiveService {
  constructor(private httpClient: HttpClient) {
  }
  _EmployeeArchiveList: EmployeeArchive[] = [];
  formData: EmployeeArchive;
  readonly rootURL = 'https://localhost:44306/api/';

  postEmployeeArchive(formData) {
    return this.httpClient.post(this.rootURL + 'EmployeeArchive/PostEmployeeArchive', formData);
  }
 
  putEmployeeArchive(EmployeeArchiveeId, data) {
    return this.httpClient.put(this.rootURL + 'EmployeeArchive/PutEmployeeArchive/'+ EmployeeArchiveeId, data);
  }
  deleteEmployeeArchive(EmployeeArchiveId: number) {
    return this.httpClient.delete(this.rootURL +'EmployeeArchive/DeleteById/'+ EmployeeArchiveId);
  }

  getEmployeeArchive(){
    return this.httpClient.get(this.rootURL + 'EmployeeArchive/GetEmployeeArchiveList');
  }
  getEmployeeArchiveId(EmployeeArchiveId) {
    return this.httpClient.get(this.rootURL +'EmployeeArchive/GetEmployeeArchiveById/'+ EmployeeArchiveId);
  }
}