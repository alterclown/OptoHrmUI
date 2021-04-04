import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
  companyForm: FormGroup;
  constructor(private fb: FormBuilder, private _companyService: CompanyService, private _router: Router, private _avRoute: ActivatedRoute) {

    this.submitCompany();
  }

  ngOnInit(): void {
    this.submitCompany();

  }

  submitCompany() {
    this.companyForm = this.fb.group({
      CompanyName: [''],
      CompanyDetails: [''],
      CompanyAddress: [''],
      CompanyType: [''],
      CompanyCountry: [''],
      CompanyTimeZone: [''],
      LicenseKey: [''],
      LicenseKeyStartDate: [''],
      LicenseKeyExpireDate: ['']
    });
  }
  onSubmit() {
    this._companyService.postCompany(this.companyForm.value).subscribe(data => {
      console.log(data);
      this._router.navigate(['company']);
    });
    //this._router.navigate(['/company']);
  }
}

