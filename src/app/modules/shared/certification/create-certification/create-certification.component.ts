import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { CertificationService } from '../services/certification.service';

@Component({
  selector: 'app-create-certification',
  templateUrl: './create-certification.component.html',
  styleUrls: ['./create-certification.component.scss']
})
export class CreateCertificationComponent implements OnInit {
  certificationForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router, private certificateService:CertificationService) {
    this.submitCertification();
  }

  ngOnInit(): void {
    this.submitCertification();
  }
  submitCertification() {
    this.certificationForm = this.fb.group({
      CertificationName: [''],
      Description: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage()
    });
  }
    onSubmit(){
      this.certificateService.postCertification(this.certificationForm.value).subscribe(data =>{
        console.log(data);
        //this._router.navigate(['']);
      });
   }
}
