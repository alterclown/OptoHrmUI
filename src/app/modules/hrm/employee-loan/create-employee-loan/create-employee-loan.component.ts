import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeLoanService } from '../employee-loan-services/employee-loan.service';

@Component({
  selector: 'app-create-employee-loan',
  templateUrl: './create-employee-loan.component.html',
  styleUrls: ['./create-employee-loan.component.scss']
})
export class CreateEmployeeLoanComponent implements OnInit {

  loanForm: FormGroup;
  constructor(private fb: FormBuilder, private loanService: EmployeeLoanService) {}
  ngOnInit(): void {
    this.submitEmployee();
  }
  submitEmployee(){
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
  onSubmit(){
    this.loanService.postLoan(this.loanForm.value).subscribe(data =>{
      console.log(data);
      //this._router.navigate(['company']);
    });
 }

}
