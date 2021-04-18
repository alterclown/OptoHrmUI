import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PayGrade } from '../models/paygrade';

@Injectable({
  providedIn: 'root'
})
export class PayGradeService {
  constructor(private httpClient: HttpClient) {
  }
  formData: PayGrade;
  readonly rootURL = 'https://localhost:44306/api/';

  postPayGrade(formData) {
    return this.httpClient.post(this.rootURL + 'PayGrade/PostPayGrade', formData);
  }
  putPayGrade(PayGradeId,data) {
    return this.httpClient.put(this.rootURL + 'PayGrade/PutPayGrade/'+ PayGradeId,data);
  }
  deletePayGrade(PayGradeId: number) {
    return this.httpClient.delete(this.rootURL +'PayGrade/DeleteById/'+ PayGradeId);
  }

  getPayGrade(){
    return this.httpClient.get(this.rootURL + 'PayGrade/GetPayGradeList');
  }
  getPayGradeId(PayGradeId) {
    return this.httpClient.get(this.rootURL +'PayGrade/GetPayGradeById/'+ PayGradeId);
  }
}
