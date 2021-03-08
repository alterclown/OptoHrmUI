import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent implements OnInit {
  companyForm: FormGroup;
  constructor(private fb: FormBuilder, private _companyService: CompanyService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCompanyParamData();
    this.submitCompany();
  }
  
  submitCompany() {
    this.companyForm = this.fb.group({
      CompanyName: [''],
      LicenseKey: [''],
      LicenseKeyStartDate: [''],
      LicenseKeyExpireDate: ['']
    });
  }
  getCompanyParamData(){
    this._companyService.getCompanyById(this._avRoute.snapshot.params.id).subscribe(data => {
      console.log(data)
      this.companyForm = this.fb.group({
        CompanyName: (data['companyName']),
        LicenseKey: (data['licenseKey']),
        LicenseKeyStartDate: (data['licenseKeyStartDate']),
        LicenseKeyExpireDate: (data['licenseKeyExpireDate']),
      });
    });
  }

  onUpdate() {
    this._companyService.putCompany(this._avRoute.snapshot.params.id,this.companyForm.value).subscribe(data => {
      console.log(data);
      this._router.navigate(['dashboard']);
    });
    //this._router.navigate(['/company']);
  }

}
