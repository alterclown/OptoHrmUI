import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { PaymentMethodService } from '../services/payment-method.service';

@Component({
  selector: 'app-update-payment-method',
  templateUrl: './update-payment-method.component.html',
  styleUrls: ['./update-payment-method.component.scss']
})
export class UpdatePaymentMethodComponent implements OnInit {

  paymentForm: FormGroup;
  constructor(private fb: FormBuilder, private paymentMethodService: PaymentMethodService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitPaymentMethod();
  }

  ngOnInit(): void {
    this.submitPaymentMethod();
    this.getPaymentMethodId();
  }
  submitPaymentMethod() {
    this.paymentForm = this.fb.group({
      PaymentMethodName: ['']
    });
  }
  onUpdate() {
    this.paymentMethodService.putPaymentMethod(this._avRoute.snapshot.params.id, this.paymentForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getPaymentMethodId() {
    this.paymentMethodService.getPaymentMethodId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.paymentForm = this.fb.group({
        PaymentMethodId: (data['paymentMethodId']),
        PaymentMethodName: (data['paymentMethodName']),
        EmployeeId: (data['employeeId']),
        UserId: Authentication.getUserIdFromLocalStorage(),
        CompanyId: Authentication.getCompanyIdFromLocalStorage()
      });
    });
  }
}
