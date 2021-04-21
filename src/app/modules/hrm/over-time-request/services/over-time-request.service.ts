import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { OverTimeRequest } from '../models/OverTimeRequest';

@Injectable({
  providedIn: 'root'
})
export class OverTimeRequestService {
  constructor(private httpClient: HttpClient) {
  }
  formData: OverTimeRequest;
  readonly rootURL = 'https://localhost:44306/api/';

  postOverTimeRequest(formData) {
    return this.httpClient.post(this.rootURL + 'OverTimeRequest/PostOverTimeRequest', formData);
  }
  putOverTimeRequest(OverTimeRequestId,data) {
    return this.httpClient.put(this.rootURL + 'OverTimeRequest/PutOverTimeRequest/'+ OverTimeRequestId,data);
  }
  deleteOverTimeRequest(OverTimeRequestId: number) {
    return this.httpClient.delete(this.rootURL +'OverTimeRequest/DeleteById/'+ OverTimeRequestId);
  }

  getOverTimeRequest(){
    return this.httpClient.get(this.rootURL + 'OverTimeRequest/GetOverTimeRequestList');
  }
  getOverTimeRequestId(OverTimeRequestId) {
    return this.httpClient.get(this.rootURL +'OverTimeRequest/GetOverTimeRequestById/'+ OverTimeRequestId);
  }
}
