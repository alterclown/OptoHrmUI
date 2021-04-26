import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attendance } from '../models/attendance';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  constructor(private httpClient: HttpClient) {
  }
  _AttendanceList: Attendance[] = [];
  formData: Attendance;
  readonly rootURL = 'https://localhost:44306/api/';

  postAttendance(formData) {
    return this.httpClient.post(this.rootURL + 'Attendance/PostAttendance', formData);
  }

  putAttendance(AttendanceeId, data) {
    return this.httpClient.put(this.rootURL + 'Attendance/PutAttendance/' + AttendanceeId, data);
  }
  deleteAttendance(AttendanceId: number) {
    return this.httpClient.delete(this.rootURL + 'Attendance/DeleteById/' + AttendanceId);
  }

  getAttendance(pageNumber, pageDataLimit) {
    return this.httpClient.get(this.rootURL + `Attendance/GetAttendanceList?pageNumber=${pageNumber}&pageDataLimit=${pageDataLimit}`);
  }
  getAttendanceId(AttendanceId) {
    return this.httpClient.get(this.rootURL + 'Attendance/GetAttendanceById/' + AttendanceId);
  }
}