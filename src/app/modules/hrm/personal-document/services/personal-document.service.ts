import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PersonalDocument } from '../models/PersonalDocument';

@Injectable({
  providedIn: 'root'
})
export class PersonalDocumentService {
  constructor(private httpClient: HttpClient) {
  }
  formData: PersonalDocument;
  readonly rootURL = 'https://localhost:44306/api/';

  postPersonalDocument(formData) {
    return this.httpClient.post(this.rootURL + 'PersonalDocument/PostPersonalDocument', formData);
  }
  putPersonalDocument(PersonalDocumentId,data) {
    return this.httpClient.put(this.rootURL + 'PersonalDocument/PutPersonalDocument/'+ PersonalDocumentId,data);
  }
  deletePersonalDocument(PersonalDocumentId: number) {
    return this.httpClient.delete(this.rootURL +'PersonalDocument/DeleteById/'+ PersonalDocumentId);
  }

  getPersonalDocument(){
    return this.httpClient.get(this.rootURL + 'PersonalDocument/GetPersonalDocumentList');
  }
  getPersonalDocumentId(PersonalDocumentId) {
    return this.httpClient.get(this.rootURL +'PersonalDocument/GetPersonalDocumentById/'+ PersonalDocumentId);
  }
}
