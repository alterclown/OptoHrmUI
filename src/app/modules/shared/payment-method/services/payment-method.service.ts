import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PaymentMethod } from '../models/paymentMethod';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  constructor(private httpClient: HttpClient) {
  }
  formData: PaymentMethod;
  readonly rootURL = 'https://localhost:44306/api/';

  postPaymentMethod(formData) {
    return this.httpClient.post(this.rootURL + 'PaymentMethod/PostPaymentMethod', formData);
  }
  putPaymentMethod(PaymentMethodId,data) {
    return this.httpClient.put(this.rootURL + 'PaymentMethod/PutPaymentMethod/'+ PaymentMethodId,data);
  }
  deletePaymentMethod(PaymentMethodId: number) {
    return this.httpClient.delete(this.rootURL +'PaymentMethod/DeleteById/'+ PaymentMethodId);
  }

  getPaymentMethod(){
    return this.httpClient.get(this.rootURL + 'PaymentMethod/GetPaymentMethodList');
  }
  getPaymentMethodId(PaymentMethodId) {
    return this.httpClient.get(this.rootURL +'PaymentMethod/GetPaymentMethodById/'+ PaymentMethodId);
  }
}
