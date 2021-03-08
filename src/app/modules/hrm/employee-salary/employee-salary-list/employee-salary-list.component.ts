import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Company } from 'src/app/modules/shared/company/model/company.model';
import { CompanyService } from 'src/app/modules/shared/company/service/company.service';
import { EmployeeSalaryService } from '../employee-salary-services/employee-salary.service';

@Component({
  selector: 'app-employee-salary-list',
  templateUrl: './employee-salary-list.component.html',
  styleUrls: ['./employee-salary-list.component.css']
})
export class EmployeeSalaryListComponent implements OnInit {
  salaryList: any;
  constructor(private salaryService:EmployeeSalaryService) {
  }

  ngOnInit(): void {
   this.getData();
  }
  getData(){
    this.salaryService.getSalary().subscribe( data =>{
      this.salaryList = data;
    });
  }
  deleteSalary(salaryId: number){
    this.salaryService.deleteSalary(salaryId).subscribe(() => {
      console.log('Deleted!');
    });
    this.salaryList.splice(0,1);
  }

}
