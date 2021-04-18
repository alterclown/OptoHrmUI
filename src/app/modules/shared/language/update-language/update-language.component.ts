import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-update-language',
  templateUrl: './update-language.component.html',
  styleUrls: ['./update-language.component.scss']
})
export class UpdateLanguageComponent implements OnInit {

  languageForm: FormGroup;
  constructor(private fb: FormBuilder, private languageService: LanguageService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitLanguage();
  }

  ngOnInit(): void {
    this.submitLanguage();
    this.getLanguageId();
  }
  submitLanguage() {
    this.languageForm = this.fb.group({
      LanguageName: [''],
      Description: ['']
    });
  }
  onUpdate() {
    this.languageService.putLanguage(this._avRoute.snapshot.params.id, this.languageForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getLanguageId() {
    this.languageService.getLanguageId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.languageForm = this.fb.group({
        LanguageId: (data['languageId']),
        LanguageName: (data['languageName']),
        Description: (data['description']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage()
      });
    });
  }

}
