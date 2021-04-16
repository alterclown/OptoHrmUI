import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeLanguageService } from '../services/employee-language.service';

@Component({
  selector: 'app-update-employee-language',
  templateUrl: './update-employee-language.component.html',
  styleUrls: ['./update-employee-language.component.scss']
})
export class UpdateEmployeeLanguageComponent implements OnInit {

  employeeLanguageForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeLanguageService: EmployeeLanguageService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitEmployeeLanguage();
    this.getEmployeeLanguageId();
  }
  getEmployeeLanguageId() {
    this.employeeLanguageService.getEmployeeLanguageId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.employeeLanguageForm = this.fb.group({
        EmployeeName: (data['employeeName']),
        Language: (data['language']),
        Reading: (data['reading']),
        Speaking: (data['speaking']),
        Writing: (data['writing']),
        Listening: (data['listening']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage(),
        LanguageId: (data['languageId']),
      });
    });
  }
  submitEmployeeLanguage() {
    this.employeeLanguageForm = this.fb.group({
      EmployeeName: [''],
      Language: [''],
      Reading: [''],
      Speaking: [''],
      Writing: [''],
      Listening: [''],
    });
  }
  onUpdate() {
    this.employeeLanguageService.putEmployeeLanguage(this._avRoute.snapshot.params.id, this.employeeLanguageForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
