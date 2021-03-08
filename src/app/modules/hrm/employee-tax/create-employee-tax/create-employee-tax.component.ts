import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeTaxService } from '../employee-tax-services/employee-tax.service';

@Component({
  selector: 'app-create-employee-tax',
  templateUrl: './create-employee-tax.component.html',
  styleUrls: ['./create-employee-tax.component.scss']
})
export class CreateEmployeeTaxComponent implements OnInit {

  taxForm: FormGroup;
  constructor(private fb: FormBuilder, private taxService: EmployeeTaxService) {
    this.submitTax();
  }
  ngOnInit(): void {
    this.submitTax();
  }
  submitTax(){
    this.taxForm = this.fb.group({
    EmployeeId:[''],
    TaxName:[''],
    TaxValue:[''],
    Status:[''],
    CompanyId :Authentication.getCompanyIdFromLocalStorage(),
    UserId :Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit(){
    this.taxService.postTax(this.taxForm.value).subscribe(data =>{
      console.log(data);
      //this._router.navigate(['company']);
    });
 }

}
