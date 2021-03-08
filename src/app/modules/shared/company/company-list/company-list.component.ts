import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companyList:any;
  constructor(private _companyService: CompanyService,private _router: Router) {
  }

  ngOnInit(): void {
   this.getData();
  }

  getData(){
    this._companyService.getCompanyData().subscribe( data =>{
      this.companyList = data;
    });
  }
  deleteCompany(companyId){
    this._companyService.deleteCompany(companyId).subscribe(() => {
      console.log('Deleted!');
    });
    this.companyList.splice(0,1);
    //this.getData();
  }
}
