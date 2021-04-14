import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeCertificationService } from '../services/employee-certification.service';

@Component({
  selector: 'app-create-employee-certification',
  templateUrl: './create-employee-certification.component.html',
  styleUrls: ['./create-employee-certification.component.scss']
})
export class CreateEmployeeCertificationComponent implements OnInit {
  employeeCertificationForm: FormGroup;
  constructor(private fb: FormBuilder,private employeeCertificationService: EmployeeCertificationService) {
    this.submitCertificatiion();
  }

  ngOnInit(): void {
    this.submitCertificatiion();
  }
  submitCertificatiion(){
    this.employeeCertificationForm = this.fb.group({
      EmployeeName:[''],
      Certification:[''],
      Institute:[''],
      GrantedOn:[''],
      ValidThru:[''],
      EmployeeId:[''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage(),
      CertificationId:['']
    });
  }
  onSubmit(){
    this.employeeCertificationService.postEmployeeCertification(this.employeeCertificationForm.value).subscribe(data =>{
      console.log(data);
    });
 }

}
