import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) {
  }

  formData: Education;
  readonly rootURL = 'https://localhost:44306/api/';
  list : Education[];

  postEducation(formData) {
    return this.http.post(this.rootURL + 'Education/PostEducation', formData);
  }
  putEducation(EducationId,data) {
    return this.http.put(this.rootURL + 'Education/PutEducation/'+ EducationId, data);
  }
  deleteEducation(EducationId) {
    return this.http.delete(this.rootURL +'Education/DeleteById/'+ EducationId);
  }

  getEducationData(){
    return this.http.get(this.rootURL + 'Education/GetEducationList');
  }
  getEducationById(EducationId) {
    return this.http.get(this.rootURL + 'Education/GetEducationById/' + EducationId);
  }
}
