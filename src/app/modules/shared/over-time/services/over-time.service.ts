import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { OverTime } from '../models/overTime';

@Injectable({
  providedIn: 'root'
})
export class OverTimeService {
  constructor(private httpClient: HttpClient) {
  }
  formData: OverTime;
  readonly rootURL = 'https://localhost:44306/api/';

  postOverTime(formData) {
    return this.httpClient.post(this.rootURL + 'OverTime/PostOverTime', formData);
  }
  putOverTime(OverTimeId,data) {
    return this.httpClient.put(this.rootURL + 'OverTime/PutOverTime/'+ OverTimeId,data);
  }
  deleteOverTime(OverTimeId: number) {
    return this.httpClient.delete(this.rootURL +'OverTime/DeleteById/'+ OverTimeId);
  }

  getOverTime(){
    return this.httpClient.get(this.rootURL + 'OverTime/GetOverTimeList');
  }
  getOverTimeId(OverTimeId) {
    return this.httpClient.get(this.rootURL +'OverTime/GetOverTimeById/'+ OverTimeId);
  }
}
