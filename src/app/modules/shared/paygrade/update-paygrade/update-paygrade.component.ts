import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { PayGradeService } from '../services/pay-grade.service';

@Component({
  selector: 'app-update-paygrade',
  templateUrl: './update-paygrade.component.html',
  styleUrls: ['./update-paygrade.component.scss']
})
export class UpdatePaygradeComponent implements OnInit {

  payGradeForm: FormGroup;
  constructor(private fb: FormBuilder, private payGradeService: PayGradeService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitOverTime();
  }

  ngOnInit(): void {
    this.submitOverTime();
    this.getPayGradeId();
  }
  submitOverTime() {
    this.payGradeForm = this.fb.group({
      PayGradeName: [''],
      MinSalary: [''],
      MaxSalary: ['']
    });
  }
  onUpdate() {
    this.payGradeService.putPayGrade(this._avRoute.snapshot.params.id, this.payGradeForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getPayGradeId() {
    this.payGradeService.getPayGradeId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.payGradeForm = this.fb.group({
        PayGradeId: (data['payGradeId']),
        PayGradeName: (data['payGradeName']),
        MinSalary: (data['minSalary']),
        MaxSalary: (data['maxSalary']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage()
      });
    });
  }

}
