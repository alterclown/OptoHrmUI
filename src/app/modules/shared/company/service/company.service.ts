import { Injectable } from '@angular/core';
import { Company } from '../model/company.model';
import { SpectreStatus } from '../../../../utils/enam/spectre-status.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  formData: Company;
  readonly rootURL = 'https://localhost:44306/api/';
  list : Company[];

  postCompany(formData) {
    return this.http.post(this.rootURL + 'Company/PostCompany', formData);
  }
  putCompany(CompanyId,data) {
    return this.http.put(this.rootURL + 'Company/PutCompany/'+ CompanyId, data);
  }
  deleteCompany(companyId) {
    return this.http.delete(this.rootURL +'Company/DeleteById/'+ companyId);
  }

  getCompanyData(){
    return this.http.get(this.rootURL + 'Company/GetCompanyList');
  }
  getCompanyById(companyId) {
    return this.http.get(this.rootURL + 'Company/GetCompanyById/' + companyId);
  }
}
