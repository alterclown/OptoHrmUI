import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeLanguageService } from '../services/employee-language.service';

@Component({
  selector: 'app-create-employee-language',
  templateUrl: './create-employee-language.component.html',
  styleUrls: ['./create-employee-language.component.scss']
})
export class CreateEmployeeLanguageComponent implements OnInit {

  employeeLanguageForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeLanguageService: EmployeeLanguageService) {
    this.submitEmployeeLanguage();
  }

  ngOnInit(): void {
    this.submitEmployeeLanguage();
  }
  submitEmployeeLanguage() {
    this.employeeLanguageForm = this.fb.group({
    EmployeeName: [''],
    Language: [''],
    Reading: [''],
    Speaking: [''],
    Writing: [''],
    Listening: [''],
    EmployeeId: [''],
    CompanyId: Authentication.getCompanyIdFromLocalStorage(),
    UserId: Authentication.getUserIdFromLocalStorage(),
    LanguageId: [''],
    });
  }
  onSubmit() {
    this.employeeLanguageService.postEmployeeLanguage(this.employeeLanguageForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
