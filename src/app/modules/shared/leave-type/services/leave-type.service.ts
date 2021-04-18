import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LeaveType } from '../models/leave-type';

@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {
  constructor(private httpClient: HttpClient) {
  }
  formData: LeaveType;
  readonly rootURL = 'https://localhost:44306/api/';

  postLeaveType(formData) {
    return this.httpClient.post(this.rootURL + 'LeaveType/PostLeaveType', formData);
  }
  putLeaveType(LeaveTypeId,data) {
    return this.httpClient.put(this.rootURL + 'LeaveType/PutLeaveType/'+ LeaveTypeId,data);
  }
  deleteLeaveType(LeaveTypeId: number) {
    return this.httpClient.delete(this.rootURL +'LeaveType/DeleteById/'+ LeaveTypeId);
  }

  getLeaveType(){
    return this.httpClient.get(this.rootURL + 'LeaveType/GetLeaveTypeList');
  }
  getLeaveTypeId(LeaveTypeId) {
    return this.httpClient.get(this.rootURL +'LeaveType/GetLeaveTypeById/'+ LeaveTypeId);
  }
}
