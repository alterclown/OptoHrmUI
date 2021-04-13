import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeArchiveService } from '../services/employee-archive.service';

@Component({
  selector: 'app-create-employee-archived',
  templateUrl: './create-employee-archived.component.html',
  styleUrls: ['./create-employee-archived.component.scss']
})
export class CreateEmployeeArchivedComponent implements OnInit {
  archiveForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router, private employeeArchiveService: EmployeeArchiveService) {
    this.submitArchive();
  }

  ngOnInit(): void {
    this.submitArchive();
  }
  submitArchive() {
    this.archiveForm = this.fb.group({
      EmployeeNumber: [''],
      FirstName: [''],
      LastName: [''],
      Department: [''],
      Supervisor: [''],
      EmployeeId: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage(),
      UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.employeeArchiveService.postEmployeeArchive(this.archiveForm.value).subscribe(data => {
      console.log(data);
      //this._router.navigate(['']);
    });
  }
}
