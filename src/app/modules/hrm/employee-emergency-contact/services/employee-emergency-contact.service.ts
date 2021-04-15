import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeEmergencyContact } from '../models/employeeEmergencyContact';


@Injectable({
  providedIn: 'root'
})
export class EmployeeEmergencyContactService {
  constructor(private httpClient: HttpClient) {
  }
  
  formData: EmployeeEmergencyContact;
  readonly rootURL = 'https://localhost:44306/api/';

  postEmployeeEmergencyContact(formData) {
    return this.httpClient.post(this.rootURL + 'EmployeeEmergencyContact/PostEmployeeEmergencyContact', formData);
  }
  putEmployeeEmergencyContact(EmployeeContactId, data) {
    return this.httpClient.put(this.rootURL + 'EmployeeEmergencyContact/PutEmployeeEmergencyContact/'+ EmployeeContactId, data);
  }
  deleteEmployeeEmergencyContact(EmployeeContactId: number) {
    return this.httpClient.delete(this.rootURL +'EmployeeEmergencyContact/DeleteById/'+ EmployeeContactId);
  }

  getEmployeeEmergencyContact(){
    return this.httpClient.get(this.rootURL + 'EmployeeEmergencyContact/GetEmployeeEmergencyContactList');
  }
  getEmployeeEmergencyContactId(EmployeeContactId) {
    return this.httpClient.get(this.rootURL +'EmployeeEmergencyContact/GetEmployeeEmergencyContactById/'+ EmployeeContactId);
  }
}
