import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeSkill } from '../models/employeeSkill';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSkillService {
  constructor(private httpClient: HttpClient) {
  }
  formData: EmployeeSkill;
  readonly rootURL = 'https://localhost:44306/api/';

  postEmployeeSkill(formData) {
    return this.httpClient.post(this.rootURL + 'EmployeeSkill/PostEmployeeSkill', formData);
  }
  putEmployeeSkill(EmployeeSkillsId,data) {
    return this.httpClient.put(this.rootURL + 'EmployeeSkill/PutEmployeeSkill/'+ EmployeeSkillsId,data);
  }
  deleteEmployeeSkill(EmployeeSkillsId: number) {
    return this.httpClient.delete(this.rootURL +'EmployeeSkill/DeleteById/'+ EmployeeSkillsId);
  }

  getEmployeeSkill(){
    return this.httpClient.get(this.rootURL + 'EmployeeSkill/GetEmployeeSkillList');
  }
  getEmployeeSkillId(EmployeeSkillsId) {
    return this.httpClient.get(this.rootURL +'EmployeeSkill/GetEmployeeSkillById/'+ EmployeeSkillsId);
  }
}
