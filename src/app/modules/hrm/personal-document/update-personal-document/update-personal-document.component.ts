import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { PersonalDocumentService } from '../services/personal-document.service';

@Component({
  selector: 'app-update-personal-document',
  templateUrl: './update-personal-document.component.html',
  styleUrls: ['./update-personal-document.component.scss']
})
export class UpdatePersonalDocumentComponent implements OnInit {

  personalDocumentForm: FormGroup;
  constructor(private fb: FormBuilder, private personalDocumentService: PersonalDocumentService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitPersonalDocument();
  }

  ngOnInit(): void {
    this.submitPersonalDocument();
    this.getPersonalDocumentId();
  }
  submitPersonalDocument() {
    this.personalDocumentForm = this.fb.group({
      Document: [''],
      ValidUntil: [''],
      Status: [''],
      Details: [''],
      Attachment: ['']
    });
  }
  onUpdate() {
    this.personalDocumentService.putPersonalDocument(this._avRoute.snapshot.params.id, this.personalDocumentForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getPersonalDocumentId() {
    this.personalDocumentService.getPersonalDocumentId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.personalDocumentForm = this.fb.group({
        PersonalDocumentId: (data['personalDocumentId']),
        Document: (data['document']),
        ValidUntil: (data['validUntil']),
        Status: (data['status']),
        Details: (data['details']),
        Attachment: (data['attachment']),
        EmployeeId: (data['employeeId']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage(),
        UserId: Authentication.getUserIdFromLocalStorage()
      });
    });
  }

}
