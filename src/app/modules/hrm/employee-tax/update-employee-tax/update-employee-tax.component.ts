import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeTaxService } from '../employee-tax-services/employee-tax.service';

@Component({
  selector: 'app-update-employee-tax',
  templateUrl: './update-employee-tax.component.html',
  styleUrls: ['./update-employee-tax.component.scss']
})
export class UpdateEmployeeTaxComponent implements OnInit {
  taxForm: FormGroup;
  constructor(private fb: FormBuilder,private employeeTaxService:EmployeeTaxService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitTax();
    this.getTaxId();
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
 getTaxId() {
  this.employeeTaxService.getTaxId(this._avRoute.snapshot.params.id).subscribe(data => {
    this.taxForm = this.fb.group({      
      EmployeeId: (data['employeeId']),
      TaxName:(data['taxName']),
      TaxValue:(data['taxValue']),
      Status:(data['status']),
      CompanyId :Authentication.getCompanyIdFromLocalStorage(),
      UserId :Authentication.getUserIdFromLocalStorage()
    });
  });
}
onUpdate() {
  this.employeeTaxService.putTax(this._avRoute.snapshot.params.id, this.taxForm.value).subscribe(data => {
    console.log(data);
    //this._router.navigate(['company']);
  });
}
}
