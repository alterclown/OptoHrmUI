import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Travel } from '../models/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  constructor(private httpClient: HttpClient) {
  }
  formData: Travel;
  readonly rootURL = 'https://localhost:44306/api/';

  postTravel(formData) {
    return this.httpClient.post(this.rootURL + 'Travel/PostTravel', formData);
  }
  putTravel(TravelId,data) {
    return this.httpClient.put(this.rootURL + 'Travel/PutTravel/'+ TravelId,data);
  }
  deleteTravel(TravelId: number) {
    return this.httpClient.delete(this.rootURL +'Travel/DeleteById/'+ TravelId);
  }

  getTravel(){
    return this.httpClient.get(this.rootURL + 'Travel/GetTravelList');
  }
  getTravelId(TravelId) {
    return this.httpClient.get(this.rootURL +'Travel/GetTravelById/'+ TravelId);
  }
}
