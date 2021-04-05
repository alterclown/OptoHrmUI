import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Certification } from '../models/certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http: HttpClient) {
  }

  formData: Certification;
  readonly rootURL = 'https://localhost:44306/api/';
  list : Certification[];

  postCertification(formData) {
    return this.http.post(this.rootURL + 'Certification/PostCertification', formData);
  }
  putCertification(CertificationId,data) {
    return this.http.put(this.rootURL + 'Certification/PutCertification/'+ CertificationId, data);
  }
  deleteCertification(certificationId) {
    return this.http.delete(this.rootURL +'Certification/DeleteById/'+ certificationId);
  }

  getCertificationData(){
    return this.http.get(this.rootURL + 'Certification/GetCertificationList');
  }
  getCertificationById(certificationId) {
    return this.http.get(this.rootURL + 'Certification/GetCertificationById/' + certificationId);
  }
}
