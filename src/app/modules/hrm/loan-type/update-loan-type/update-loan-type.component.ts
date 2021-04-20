import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { LoanTypeService } from '../services/loan-type.service';

@Component({
  selector: 'app-update-loan-type',
  templateUrl: './update-loan-type.component.html',
  styleUrls: ['./update-loan-type.component.scss']
})
export class UpdateLoanTypeComponent implements OnInit {

  loanTypeForm: FormGroup;
  constructor(private fb: FormBuilder, private loanTypeService: LoanTypeService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitLoanType();
  }

  ngOnInit(): void {
    this.submitLoanType();
    this.getLoanTypeId();
  }
  submitLoanType() {
    this.loanTypeForm = this.fb.group({
      Name: [''],
      Details: ['']
    });
  }
  onUpdate() {
    this.loanTypeService.putLoanType(this._avRoute.snapshot.params.id, this.loanTypeForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getLoanTypeId() {
    this.loanTypeService.getLoanTypeId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.loanTypeForm = this.fb.group({
        LoanTypeId: (data['loanTypeId']),
        Name: (data['name']),
        Details: (data['details']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }
}
