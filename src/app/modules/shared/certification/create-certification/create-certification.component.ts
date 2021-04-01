import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-certification',
  templateUrl: './create-certification.component.html',
  styleUrls: ['./create-certification.component.scss']
})
export class CreateCertificationComponent implements OnInit {
  certificationForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router) {
    this.submitCertification();
  }

  ngOnInit(): void {
    this.submitCertification();
  }
  submitCertification() {
    this.certificationForm = this.fb.group({
      CertificationId: [''],
      CertificationName: [''],
      Description: [''],
      CompanyId: [''],
    });
  }
  //   onSubmit(){
  //     this.employeeService.postEmployee(this.employeeForm.value).subscribe(data =>{
  //       console.log(data);
  //       this._router.navigate(['employee']);

  //     });
  //  }
}
