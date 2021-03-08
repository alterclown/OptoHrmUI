import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeLoan } from '../models/employeeLoan';


@Injectable({
  providedIn: 'root'
})
export class EmployeeLoanService {
  constructor(private httpClient: HttpClient) {
  }
  _employeeLoanList: EmployeeLoan[] = [];
  formData: EmployeeLoan;
  readonly rootURL = 'https://localhost:44306/api/';

  postLoan(formData) {
    return this.httpClient.post(this.rootURL + 'Loan/PostLoan', formData);
  }
  putLoan(LoanId,data) {
    return this.httpClient.put(this.rootURL + 'Loan/PutLoan/'+ LoanId,data);
  }
  deleteLoan(loanId: number) {
    return this.httpClient.delete(this.rootURL +'Loan/DeleteById/'+ loanId);
  }

  getLoan(){
    return this.httpClient.get(this.rootURL + 'Loan/GetLoanList');
  }
  getLoanId(loanId) {
    return this.httpClient.get(this.rootURL +'Loan/GetLoanById/'+ loanId);
  }
}
