import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoanType } from '../models/loanType';

@Injectable({
  providedIn: 'root'
})
export class LoanTypeService {
  constructor(private httpClient: HttpClient) {
  }
  formData: LoanType;
  readonly rootURL = 'https://localhost:44306/api/';

  postLoanType(formData) {
    return this.httpClient.post(this.rootURL + 'LoanType/PostLoanType', formData);
  }
  putLoanType(LoanTypeId,data) {
    return this.httpClient.put(this.rootURL + 'LoanType/PutLoanType/'+ LoanTypeId,data);
  }
  deleteLoanType(LoanTypeId: number) {
    return this.httpClient.delete(this.rootURL +'LoanType/DeleteById/'+ LoanTypeId);
  }

  getLoanType(){
    return this.httpClient.get(this.rootURL + 'LoanType/GetLoanTypeList');
  }
  getLoanTypeId(LoanTypeId) {
    return this.httpClient.get(this.rootURL +'LoanType/GetLoanTypeById/'+ LoanTypeId);
  }
}
