import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private httpClient: HttpClient) {
  }
  formData: Skill;
  readonly rootURL = 'https://localhost:44306/api/';

  postSkill(formData) {
    return this.httpClient.post(this.rootURL + 'Skill/PostSkill', formData);
  }
  putSkill(SkillId,data) {
    return this.httpClient.put(this.rootURL + 'Skill/PutSkill/'+ SkillId,data);
  }
  deleteSkill(SkillId: number) {
    return this.httpClient.delete(this.rootURL +'Skill/DeleteById/'+ SkillId);
  }

  getSkill(){
    return this.httpClient.get(this.rootURL + 'Skill/GetSkillList');
  }
  getSkillId(SkillId) {
    return this.httpClient.get(this.rootURL +'Skill/GetSkillById/'+ SkillId);
  }
}
