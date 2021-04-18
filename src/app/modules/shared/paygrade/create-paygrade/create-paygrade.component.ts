import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { PayGradeService } from '../services/pay-grade.service';

@Component({
  selector: 'app-create-paygrade',
  templateUrl: './create-paygrade.component.html',
  styleUrls: ['./create-paygrade.component.scss']
})
export class CreatePaygradeComponent implements OnInit {

  payGradeForm: FormGroup;
  constructor(private fb: FormBuilder, private payGradeService: PayGradeService) {
    this.submitPayGrade();
  }

  ngOnInit(): void {
    this.submitPayGrade();
  }
  submitPayGrade() {
    this.payGradeForm = this.fb.group({
    PayGradeName: [''],
    MinSalary: [''],
    MaxSalary: [''],
    CompanyId: Authentication.getCompanyIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.payGradeService.postPayGrade(this.payGradeForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
