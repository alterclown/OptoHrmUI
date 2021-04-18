import { Component, OnInit } from '@angular/core';
import { PaymentMethodService } from '../services/payment-method.service';

@Component({
  selector: 'app-payment-method-list',
  templateUrl: './payment-method-list.component.html',
  styleUrls: ['./payment-method-list.component.scss']
})
export class PaymentMethodListComponent implements OnInit {

  _paymentList: any;
  showSpinner = true;
  constructor(private paymentMethodService: PaymentMethodService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.paymentMethodService.getPaymentMethod().subscribe(data => {
      this._paymentList = data;
      this.showSpinner = false;
    });
  }
  deletePaymentMethod(payGradeId: number) {
    this.paymentMethodService.deletePaymentMethod(payGradeId).subscribe(() => {
      console.log('Deleted!');
    });
    this._paymentList.splice(0, 1);
  }

}
