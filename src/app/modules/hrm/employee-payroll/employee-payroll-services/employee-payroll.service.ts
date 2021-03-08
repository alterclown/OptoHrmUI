import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeePayroll } from '../models/employeePayroll';


@Injectable({
  providedIn: 'root'
})
export class EmployeePayrollService {
  constructor(private httpClient: HttpClient) {
  }
  _employeePayrollList: EmployeePayroll[] = [];

  formData: EmployeePayroll;
  readonly rootURL = 'https://localhost:44306/api/';

  postPayroll(formData) {
    return this.httpClient.post(this.rootURL + 'Payroll/PostPayroll', formData);
  }
  putPayroll(PayrollId, data) {
    return this.httpClient.put(this.rootURL + 'Payroll/PutPayroll/'+ PayrollId, data);
  }
  deletePayroll(payrollId: number) {
    return this.httpClient.delete(this.rootURL +'Payroll/DeleteById/'+ payrollId);
  }

  getPayroll(){
    return this.httpClient.get(this.rootURL + 'Payroll/GetPayrollList');
  }
  getPayrollId(payrollId) {
    return this.httpClient.get(this.rootURL +'Payroll/GetPayrollById/'+ payrollId);
  }
}
