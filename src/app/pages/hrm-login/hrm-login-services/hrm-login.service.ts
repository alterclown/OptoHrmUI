import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  formData: User;
  readonly rootURL = 'https://localhost:44306/api/';
  list: User[];

  postUser(formData) {
    return this.http.post(this.rootURL + 'User/PostUser', formData);
  }
  putUser(UserId, formdata) {
    return this.http.put(this.rootURL + 'PutUser/' + UserId, this.formData);
  }
  //   deleteUser(UserId) {
  //     return this.http.delete(this.rootURL +'DeleteById/'+ UserId);
  //   }

  //   getUserData(){
  //     return this.http.get(this.rootURL + 'GetUserList');
  //   }
  //   getUserById(UserId) {
  //     return this.http.get(this.rootURL + 'GetUserById/' + UserId);
  //   }
}
