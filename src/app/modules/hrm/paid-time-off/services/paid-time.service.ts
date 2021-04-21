import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PaidTimeOff } from '../models/paidTimeOff';

@Injectable({
  providedIn: 'root'
})
export class PaidTimeOffService {
  constructor(private httpClient: HttpClient) {
  }
  formData: PaidTimeOff;
  readonly rootURL = 'https://localhost:44306/api/';

  postPaidTimeOff(formData) {
    return this.httpClient.post(this.rootURL + 'PaidTime/PostPaidTime', formData);
  }
  putPaidTimeOff(PaidTimeOffId,data) {
    return this.httpClient.put(this.rootURL + 'PaidTime/PutPaidTime/'+ PaidTimeOffId,data);
  }
  deletePaidTimeOff(PaidTimeOffId: number) {
    return this.httpClient.delete(this.rootURL +'PaidTime/DeleteById/'+ PaidTimeOffId);
  }

  getPaidTimeOff(){
    return this.httpClient.get(this.rootURL + 'PaidTime/GetPaidTimeList');
  }
  getPaidTimeOffId(PaidTimeOffId) {
    return this.httpClient.get(this.rootURL +'PaidTime/GetPaidTimeById/'+ PaidTimeOffId);
  }
}
