import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private httpClient: HttpClient) {
  }
  formData: Language;
  readonly rootURL = 'https://localhost:44306/api/';

  postLanguage(formData) {
    return this.httpClient.post(this.rootURL + 'Language/PostLanguage', formData);
  }
  putLanguage(LanguageId,data) {
    return this.httpClient.put(this.rootURL + 'Language/PutLanguage/'+ LanguageId,data);
  }
  deleteLanguage(LanguageId: number) {
    return this.httpClient.delete(this.rootURL +'Language/DeleteById/'+ LanguageId);
  }

  getLanguage(){
    return this.httpClient.get(this.rootURL + 'Language/GetLanguageList');
  }
  getLanguageId(LanguageId) {
    return this.httpClient.get(this.rootURL +'Language/GetLanguageById/'+ LanguageId);
  }
}
