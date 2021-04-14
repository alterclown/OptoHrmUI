import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeCertificationService } from '../services/employee-certification.service';

@Component({
  selector: 'app-update-employee-certification',
  templateUrl: './update-employee-certification.component.html',
  styleUrls: ['./update-employee-certification.component.scss']
})
export class UpdateEmployeeCertificationComponent implements OnInit {
  employeeCertificationForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeCertificationService: EmployeeCertificationService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitEmployeeCertification();
    this.getEmployeeCertificationById();
  }
  getEmployeeCertificationById() {
    this.employeeCertificationService.getEmployeeCertificationId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.employeeCertificationForm = this.fb.group({
        EmployeeName: (data['employeeName']),
        Certification: (data['certification']),
        Institute: (data['institute']),
        GrantedOn: (data['grantedOn']),
        ValidThru: (data['validThru']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage(),
        CertificationId: (data['certificationId']),
      });
    });
  }
  submitEmployeeCertification() {
    this.employeeCertificationForm = this.fb.group({
      EmployeeName: [''],
      Certification: [''],
      Institute: [''],
      GrantedOn: [''],
      ValidThru: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage(),
      CertificationId: ['']
    });
  }
  onUpdate() {
    this.employeeCertificationService.putEmployeeCertification(this._avRoute.snapshot.params.id, this.employeeCertificationForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
