import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Holiday } from '../models/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  constructor(private httpClient: HttpClient) {
  }
  formData: Holiday;
  readonly rootURL = 'https://localhost:44306/api/';

  postHoliday(formData) {
    return this.httpClient.post(this.rootURL + 'Holiday/PostHoliday', formData);
  }
  putHoliday(HolidaysId,data) {
    return this.httpClient.put(this.rootURL + 'Holiday/PutHoliday/'+ HolidaysId,data);
  }
  deleteHoliday(HolidaysId: number) {
    return this.httpClient.delete(this.rootURL +'Holiday/DeleteById/'+ HolidaysId);
  }

  getHoliday(){
    return this.httpClient.get(this.rootURL + 'Holiday/GetHolidayList');
  }
  getHolidayId(HolidaysId) {
    return this.httpClient.get(this.rootURL +'Holiday/GetHolidayById/'+ HolidaysId);
  }
}
