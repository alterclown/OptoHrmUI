import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MonitorAttendance } from '../models/monitorAttendance';

@Injectable({
  providedIn: 'root'
})
export class MonitorAttendanceService {
  constructor(private httpClient: HttpClient) {
  }
  formData: MonitorAttendance;
  readonly rootURL = 'https://localhost:44306/api/';

  postMonitorAttendance(formData) {
    return this.httpClient.post(this.rootURL + 'MonitorAttendance/PostMonitorAttendance', formData);
  }
  putMonitorAttendance(MonitorAttendanceId,data) {
    return this.httpClient.put(this.rootURL + 'MonitorAttendance/PutMonitorAttendance/'+ MonitorAttendanceId,data);
  }
  deleteMonitorAttendance(MonitorAttendanceId: number) {
    return this.httpClient.delete(this.rootURL +'MonitorAttendance/DeleteById/'+ MonitorAttendanceId);
  }

  getMonitorAttendance(){
    return this.httpClient.get(this.rootURL + 'MonitorAttendance/GetMonitorAttendanceList');
  }
  getMonitorAttendanceId(MonitorAttendanceId) {
    return this.httpClient.get(this.rootURL +'MonitorAttendance/GetMonitorAttendanceById/'+ MonitorAttendanceId);
  }
}
