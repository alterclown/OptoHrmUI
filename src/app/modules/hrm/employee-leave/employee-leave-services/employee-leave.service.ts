import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeLeave } from '../models/employeeLeave';


@Injectable({
  providedIn: 'root'
})
export class EmployeeLeaveService {
  constructor(private httpClient: HttpClient) {
  }
  _employeeLeaveList: EmployeeLeave[] = [ ];
  formData: EmployeeLeave;
  readonly rootURL = 'https://localhost:44306/api/';

  postLeave(formData) {
    return this.httpClient.post(this.rootURL + 'Leave/PostLeave', formData);
  }
  putLeave(LeaveId,data) {
    return this.httpClient.put(this.rootURL + 'Leave/PutLeave/'+ LeaveId,data);
  }
  deleteLeave(leaveId: number) {
    return this.httpClient.delete(this.rootURL +'Leave/DeleteById/'+ leaveId);
  }

  getLeave(pageNo){
    return this.httpClient.get(`${this.rootURL}/Leave/GetLeaveList?page=${pageNo}`);
  }
  getLeaveId(leaveId) {
    return this.httpClient.get(this.rootURL +'Leave/GetLeaveById/'+ leaveId);
  }
}
