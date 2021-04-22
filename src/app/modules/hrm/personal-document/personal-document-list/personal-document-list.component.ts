import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PersonalDocumentService } from '../services/personal-document.service';

@Component({
  selector: 'app-personal-document-list',
  templateUrl: './personal-document-list.component.html',
  styleUrls: ['./personal-document-list.component.scss']
})
export class PersonalDocumentListComponent implements OnInit {

  _personalDocumentList: any;
  constructor(private personalDocumentService: PersonalDocumentService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.spinner.show();
    this.personalDocumentService.getPersonalDocument().subscribe(data => {
      this._personalDocumentList = data;
      this.spinner.hide();
    });
  }
  deletePersonalDocument(personalDocumentId: number) {
    this.personalDocumentService.deletePersonalDocument(personalDocumentId).subscribe(() => {
      console.log('Deleted!');
    });
    this._personalDocumentList.splice(0, 1);
  }
}
