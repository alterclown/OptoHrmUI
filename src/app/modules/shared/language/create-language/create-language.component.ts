import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-create-language',
  templateUrl: './create-language.component.html',
  styleUrls: ['./create-language.component.scss']
})
export class CreateLanguageComponent implements OnInit {

  languageForm: FormGroup;
  constructor(private fb: FormBuilder, private languageService: LanguageService) {
    this.submitLanguage();
  }

  ngOnInit(): void {
    this.submitLanguage();
  }
  submitLanguage() {
    this.languageForm = this.fb.group({
      LanguageName: [''],
      Description: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.languageService.postLanguage(this.languageForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
