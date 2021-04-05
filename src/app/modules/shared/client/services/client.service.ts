import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  formData: Client;
  readonly rootURL = 'https://localhost:44306/api/';
  list : Client[];

  postClient(formData) {
    return this.http.post(this.rootURL + 'Client/PostClient', formData);
  }
  putClient(ClientId,data) {
    return this.http.put(this.rootURL + 'Client/PutClient/'+ ClientId, data);
  }
  deleteClient(ClientId) {
    return this.http.delete(this.rootURL +'Client/DeleteById/'+ ClientId);
  }

  getClientData(){
    return this.http.get(this.rootURL + 'Client/GetClientList');
  }
  getClientById(ClientId) {
    return this.http.get(this.rootURL + 'Client/GetClientById/' + ClientId);
  }
}
