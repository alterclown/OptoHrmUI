import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeAttendance } from '../models/emplyeeAttendance';


@Injectable({
  providedIn: 'root'
})
export class EmployeeAttendanceService {
  constructor(private httpClient: HttpClient) {
  }

  _attendanceList: EmployeeAttendance[] = [];
  formData: EmployeeAttendance;
  readonly rootURL = 'https://localhost:44306/api/';

  postAttendance(formData) {
    return this.httpClient.post(this.rootURL + 'Attendance/PostAttendance', formData);
  }
  putAttendance(EmployeeAttendanceId, data) {
    return this.httpClient.put(this.rootURL + 'Attendance/PutAttendance/'+ EmployeeAttendanceId, data);
  }
  deleteAttendance(employeeAttendanceId: number) {
    return this.httpClient.delete(this.rootURL +'Attendance/DeleteById/'+ employeeAttendanceId);
  }

  getAttendance(){
    return this.httpClient.get(this.rootURL + 'Attendance/GetAttendanceList');
  }
  getAttendanceId(employeeAttendanceId) {
    return this.httpClient.get(this.rootURL +'Attendance/GetAttendanceById/'+ employeeAttendanceId);
  }
}
