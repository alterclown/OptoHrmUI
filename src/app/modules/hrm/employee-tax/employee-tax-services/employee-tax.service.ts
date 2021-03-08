import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeTax } from '../models/employeeTax';


@Injectable({
  providedIn: 'root'
})
export class EmployeeTaxService {
  constructor(private httpClient: HttpClient) {
  }
 _employeeTaxList: EmployeeTax[] = [];
formData: EmployeeTax;
readonly rootURL = 'https://localhost:44306/api/';

postTax(formData) {
  return this.httpClient.post(this.rootURL + 'Tax/PostTax', formData);
}
putTax(TaxesId, data) {
  return this.httpClient.put(this.rootURL + 'Tax/PutTax/'+ TaxesId, data);
}
deleteTax(taxesId: number) {
  return this.httpClient.delete(this.rootURL +'Tax/DeleteById/'+ taxesId);
}

getTax(){
  return this.httpClient.get(this.rootURL + 'Tax/GetTaxList');
}
getTaxId(taxesId) {
  return this.httpClient.get(this.rootURL +'Tax/GetTaxById/'+ taxesId);
}
}