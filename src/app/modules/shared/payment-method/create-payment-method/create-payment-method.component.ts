import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { PaymentMethodService } from '../services/payment-method.service';

@Component({
  selector: 'app-create-payment-method',
  templateUrl: './create-payment-method.component.html',
  styleUrls: ['./create-payment-method.component.scss']
})
export class CreatePaymentMethodComponent implements OnInit {

  paymentForm: FormGroup;
  constructor(private fb: FormBuilder, private paymentMethodService: PaymentMethodService) {
    this.submitPaymentMethod();
  }

  ngOnInit(): void {
    this.submitPaymentMethod();
  }
  submitPaymentMethod() {
    this.paymentForm = this.fb.group({
      PaymentMethodName: [''],
      EmployeeId: [''],
      UserId: Authentication.getUserIdFromLocalStorage(),
      CompanyId: Authentication.getCompanyIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.paymentMethodService.postPaymentMethod(this.paymentForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
