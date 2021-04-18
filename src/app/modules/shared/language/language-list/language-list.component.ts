import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {

  _languageList: any;
  showSpinner = true;
  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.languageService.getLanguage().subscribe(data => {
      this._languageList = data;
      this.showSpinner = false;
    });
  }
  deleteLanguage(employeeSkillsId: number) {
    this.languageService.deleteLanguage(employeeSkillsId).subscribe(() => {
      console.log('Deleted!');
    });
    this._languageList.splice(0, 1);
  }


}
