import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeLoanService } from '../employee-loan-services/employee-loan.service';

@Component({
  selector: 'app-update-employee-loan',
  templateUrl: './update-employee-loan.component.html',
  styleUrls: ['./update-employee-loan.component.scss']
})
export class UpdateEmployeeLoanComponent implements OnInit {
  loanForm: FormGroup;
  constructor(private fb: FormBuilder,private loanService:EmployeeLoanService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitLoan();
    this.getLoanId();
  }
  submitLoan(){
    this.loanForm = this.fb.group({
      EmployeeId:[''],
      TypeOfLoan:[''],
      DateOfApplication:[''],
      ProposedAmount:[''],
      NoOfInstRecovery :[''],
      StartDateOfRecovery:[''],
      EndDateOfRecovery:[''],
      NoOfDays:[''],
      InterestRate:[''],
      InterestAmount:[''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
 getLoanId() {
  this.loanService.getLoanId(this._avRoute.snapshot.params.id).subscribe(data => {
    this.loanForm = this.fb.group({      
      EmployeeId: (data['employeeId']),
      TypeOfLoan:(data['typeOfLoan']),
      DateOfApplication:(data['dateOfApplication']),
      ProposedAmount:(data['proposedAmount']),
      NoOfInstRecovery:(data['noOfInstRecovery']),
      StartDateOfRecovery:(data['startDateOfRecovery']),
      EndDateOfRecovery:(data['endDateOfRecovery']),
      NoOfDays:(data['noOfDays']),
      InterestRate:(data['interestRate']),
      InterestAmount:(data['interestAmount']),
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  });
}
onUpdate() {
  this.loanService.putLoan(this._avRoute.snapshot.params.id, this.loanForm.value).subscribe(data => {
    console.log(data);
    //this._router.navigate(['company']);
  });
}
}
