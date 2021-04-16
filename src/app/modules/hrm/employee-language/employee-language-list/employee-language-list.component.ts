import { Component, OnInit } from '@angular/core';
import { EmployeeLanguageService } from '../services/employee-language.service';

@Component({
  selector: 'app-employee-language-list',
  templateUrl: './employee-language-list.component.html',
  styleUrls: ['./employee-language-list.component.scss']
})
export class EmployeeLanguageListComponent implements OnInit {

  _employeeLanguageList: any;
  showSpinner = true;
  constructor(private employeeLanguageService: EmployeeLanguageService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.employeeLanguageService.getEmployeeLanguage().subscribe(data => {
      this._employeeLanguageList = data;
      this.showSpinner = false;
    });
  }
  deleteEmployeeLanguage(employeeLanguageId: number) {
    this.employeeLanguageService.deleteEmployeeLanguage(employeeLanguageId).subscribe(() => {
      console.log('Deleted!');
    });
    this._employeeLanguageList.splice(0, 1);
  }

}
