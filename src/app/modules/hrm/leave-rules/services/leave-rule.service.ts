import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LeaveRules } from '../models/leaveRules';

@Injectable({
  providedIn: 'root'
})
export class LeaveRulesService {
  constructor(private httpClient: HttpClient) {
  }
  formData: LeaveRules;
  readonly rootURL = 'https://localhost:44306/api/';

  postLeaveRules(formData) {
    return this.httpClient.post(this.rootURL + 'LeaveRules/PostLeaveRules', formData);
  }
  putLeaveRules(LeaveRulesId,data) {
    return this.httpClient.put(this.rootURL + 'LeaveRules/PutLeaveRules/'+ LeaveRulesId,data);
  }
  deleteLeaveRules(LeaveRulesId: number) {
    return this.httpClient.delete(this.rootURL +'LeaveRules/DeleteById/'+ LeaveRulesId);
  }

  getLeaveRules(){
    return this.httpClient.get(this.rootURL + 'LeaveRules/GetLeaveRulesList');
  }
  getLeaveRulesId(LeaveRulesId) {
    return this.httpClient.get(this.rootURL +'LeaveRules/GetLeaveRulesById/'+ LeaveRulesId);
  }
}
