import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificationService } from '../services/certification.service';

@Component({
  selector: 'app-update-certification',
  templateUrl: './update-certification.component.html',
  styleUrls: ['./update-certification.component.scss']
})
export class UpdateCertificationComponent implements OnInit {
  certificationForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router,private certificateService:CertificationService, private _avRoute: ActivatedRoute) {
    this.submitCertification();
  }

  ngOnInit(): void {
    this.submitCertification();
    this.getCertificationData();
  }
  submitCertification() {
    this.certificationForm = this.fb.group({
      CertificationId: [''],
      CertificationName: [''],
      Description: [''],
      CompanyId: [''],
    });
  }
  getCertificationData() {
    this.certificateService.getCertificationById(this._avRoute.snapshot.params.id).subscribe(data => {
      console.log(data)
      this.certificationForm = this.fb.group({
        CertificationName: (data['certificationName']),
        Description: (data['description'])
      });
    });
  }

  onUpdate() {
    this.certificateService.putCertification(this._avRoute.snapshot.params.id, this.certificationForm.value).subscribe(data => {
      console.log(data);
      //this._router.navigate(['dashboard']);
    });
    //this._router.navigate(['/company']);
  }
}
