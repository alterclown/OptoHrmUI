import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { LoanTypeService } from '../services/loan-type.service';

@Component({
  selector: 'app-create-loan-type',
  templateUrl: './create-loan-type.component.html',
  styleUrls: ['./create-loan-type.component.scss']
})
export class CreateLoanTypeComponent implements OnInit {

  loanTypeForm: FormGroup;
  constructor(private fb: FormBuilder, private loanTypeService: LoanTypeService) {
    this.submitLoanType();
  }

  ngOnInit(): void {
    this.submitLoanType();
  }
  submitLoanType() {
    this.loanTypeForm = this.fb.group({
    Name: [''],
    Details: [''],
    EmployeeId: [''],
    CompanyId: Authentication.getCompanyIdFromLocalStorage(),
    UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.loanTypeService.postLoanType(this.loanTypeForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
