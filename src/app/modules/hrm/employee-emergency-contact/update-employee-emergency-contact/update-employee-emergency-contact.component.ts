import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeEmergencyContactService } from '../services/employee-emergency-contact.service';

@Component({
  selector: 'app-update-employee-emergency-contact',
  templateUrl: './update-employee-emergency-contact.component.html',
  styleUrls: ['./update-employee-emergency-contact.component.scss']
})
export class UpdateEmployeeEmergencyContactComponent implements OnInit {

  emergencyContactForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeEmergencyContactService: EmployeeEmergencyContactService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitEmergencyContact();
    this.getEmergencyContactById();
  }
  getEmergencyContactById() {
    this.employeeEmergencyContactService.getEmployeeEmergencyContactId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.emergencyContactForm = this.fb.group({
      EmployeeName:(data['employeeName']),
      Name:(data['name']),
      Relationship:(data['relationship']),
      HomePhone:(data['homePhone']),
      WorkPhone:(data['workPhone']),
      MobilePhone:(data['mobilePhone']),
      EmployeeId:(data['employeeId']),
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }
  submitEmergencyContact() {
    this.emergencyContactForm = this.fb.group({
      EmployeeName: [''],
      Name: [''],
      Relationship: [''],
      HomePhone: [''],
      WorkPhone: [''],
      MobilePhone: ['']
    });
  }
  onUpdate() {
    this.employeeEmergencyContactService.putEmployeeEmergencyContact(this._avRoute.snapshot.params.id, this.emergencyContactForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
