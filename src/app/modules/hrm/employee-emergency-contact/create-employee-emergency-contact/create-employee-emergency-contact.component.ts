import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeEmergencyContactService } from '../services/employee-emergency-contact.service';

@Component({
  selector: 'app-create-employee-emergency-contact',
  templateUrl: './create-employee-emergency-contact.component.html',
  styleUrls: ['./create-employee-emergency-contact.component.scss']
})
export class CreateEmployeeEmergencyContactComponent implements OnInit {

  emergencyContactForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeEmergencyContactService: EmployeeEmergencyContactService) {
    this.submitEmergencyContact();
  }

  ngOnInit(): void {
    this.submitEmergencyContact();
  }
  submitEmergencyContact() {
    this.emergencyContactForm = this.fb.group({
    EmployeeName: [''],
    Name: [''],
    Relationship: [''],
    HomePhone: [''],
    WorkPhone: [''],
    MobilePhone: [''],
    EmployeeId: [''],
    CompanyId: Authentication.getCompanyIdFromLocalStorage(),
    UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.employeeEmergencyContactService.postEmployeeEmergencyContact(this.emergencyContactForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
