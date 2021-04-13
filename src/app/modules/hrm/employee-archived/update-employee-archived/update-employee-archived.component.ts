import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeArchiveService } from '../services/employee-archive.service';

@Component({
  selector: 'app-update-employee-archived',
  templateUrl: './update-employee-archived.component.html',
  styleUrls: ['./update-employee-archived.component.scss']
})
export class UpdateEmployeeArchivedComponent implements OnInit {
  archiveForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeArchiveService: EmployeeArchiveService, private _router: Router, private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitEmployeeArchive();
    this.getEmployeeArchiveId();
  }
  submitEmployeeArchive() {
    this.archiveForm = this.fb.group({
      EmployeeNumber: [''],
      FirstName: [''],
      LastName: [''],
      Department: [''],
      Supervisor: [''],
    });
  }
  getEmployeeArchiveId() {
    this.employeeArchiveService.getEmployeeArchiveId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.archiveForm = this.fb.group({
        EmployeeNumber: (data['employeeNumber']),
        FirstName: (data['firstName']),
        LastName: (data['lastName']),
        Department: (data['department']),
        Supervisor: (data['supervisor']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }
  onUpdate() {
    this.employeeArchiveService.putEmployeeArchive(this._avRoute.snapshot.params.id, this.archiveForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
