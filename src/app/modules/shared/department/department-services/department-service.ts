import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeDepartment } from '../models/department';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDepartmentService {
  constructor(private http: HttpClient) {
  }
  formData: EmployeeDepartment;
  readonly rootURL = 'https://localhost:44306/api/';
  _employeeDepartmentList : EmployeeDepartment[];

  postDepartment(formData) {
    return this.http.post(this.rootURL + 'Department/PostDepartment', formData);
  }
  putDepartment(DepartmentId,data) {
    return this.http.put(this.rootURL + 'Department/PutDepartment/'+ DepartmentId,data);
  }
  deleteDepartment(departmentId: number) {
    return this.http.delete(this.rootURL +'Department/DeleteById/'+ departmentId);
  }

  getDepartment(){
    return this.http.get(this.rootURL + 'Department/GetDepartmentList');
  }
  getDepartmentId(departmentId) {
    return this.http.get(this.rootURL +'Department/GetDepartmentById/'+ departmentId);
  }
}