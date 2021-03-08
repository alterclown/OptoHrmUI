import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeDesignation } from '../models/designation';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDesignationService {
  constructor(private httpClient: HttpClient) {
  }
  _employeeDesignationList: EmployeeDesignation[] = [];

  formData: EmployeeDesignation;
  readonly rootURL = 'https://localhost:44306/api/';

  postDesignation(formData) {
    return this.httpClient.post(this.rootURL + 'Designation/PostDesignation', formData);
  }
  putDesignation(PositionId, data) {
    return this.httpClient.put(this.rootURL + 'Designation/PutDesignation/'+ PositionId, data);
  }
  deleteDesignation(positionId: number) {
    return this.httpClient.delete(this.rootURL +'Designation/DeleteById/'+ positionId);
  }

  getDesignation(){
    return this.httpClient.get(this.rootURL + 'Designation/GetDesignationList');
  }
  getDesignationId(designationId) {
    return this.httpClient.get(this.rootURL +'Designation/GetDesignationById/'+ designationId);
  }
}