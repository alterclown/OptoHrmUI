import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LeavePeriod } from '../models/leavePeriod';

@Injectable({
  providedIn: 'root'
})
export class LeavePeriodService {
  constructor(private httpClient: HttpClient) {
  }
  formData: LeavePeriod;
  readonly rootURL = 'https://localhost:44306/api/';

  postLeavePeriod(formData) {
    return this.httpClient.post(this.rootURL + 'LeavePeriod/PostLeavePeriod', formData);
  }
  putLeavePeriod(LeavePeriodId,data) {
    return this.httpClient.put(this.rootURL + 'LeavePeriod/PutLeavePeriod/'+ LeavePeriodId,data);
  }
  deleteLeavePeriod(LeavePeriodId: number) {
    return this.httpClient.delete(this.rootURL +'LeavePeriod/DeleteById/'+ LeavePeriodId);
  }

  getLeavePeriod(){
    return this.httpClient.get(this.rootURL + 'LeavePeriod/GetLeavePeriodList');
  }
  getLeavePeriodId(LeavePeriodId) {
    return this.httpClient.get(this.rootURL +'LeavePeriod/GetLeavePeriodById/'+ LeavePeriodId);
  }
}
