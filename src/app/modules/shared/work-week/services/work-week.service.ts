import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { WorkWeek } from '../models/workWeek';

@Injectable({
  providedIn: 'root'
})
export class WorkWeekService {
  constructor(private httpClient: HttpClient) {
  }
  formData: WorkWeek;
  readonly rootURL = 'https://localhost:44306/api/';

  postWorkWeek(formData) {
    return this.httpClient.post(this.rootURL + 'WorkWeek/PostWorkWeek', formData);
  }
  putWorkWeek(WorkWeekId,data) {
    return this.httpClient.put(this.rootURL + 'WorkWeek/PutWorkWeek/'+ WorkWeekId,data);
  }
  deleteWorkWeek(WorkWeekId: number) {
    return this.httpClient.delete(this.rootURL +'WorkWeek/DeleteById/'+ WorkWeekId);
  }

  getWorkWeek(){
    return this.httpClient.get(this.rootURL + 'WorkWeek/GetWorkWeekList');
  }
  getWorkWeekId(WorkWeekId) {
    return this.httpClient.get(this.rootURL +'WorkWeek/GetWorkWeekById/'+ WorkWeekId);
  }
}
