import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { PersonalDocumentService } from '../services/personal-document.service';

@Component({
  selector: 'app-create-personal-document',
  templateUrl: './create-personal-document.component.html',
  styleUrls: ['./create-personal-document.component.scss']
})
export class CreatePersonalDocumentComponent implements OnInit {

  personalDocumentForm: FormGroup;
  constructor(private fb: FormBuilder, private personalDocumentService: PersonalDocumentService) {
    this.submitPersonalDocument();
  }

  ngOnInit(): void {
    this.submitPersonalDocument();
  }
  submitPersonalDocument() {
    this.personalDocumentForm = this.fb.group({
    Document: [''],
    ValidUntil: [''],
    Status: [''],
    Details: [''],
    Attachment: [''],
    EmployeeId: [''],
    CompanyId: Authentication.getCompanyIdFromLocalStorage(),
    UserId: Authentication.getUserIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.personalDocumentService.postPersonalDocument(this.personalDocumentForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
