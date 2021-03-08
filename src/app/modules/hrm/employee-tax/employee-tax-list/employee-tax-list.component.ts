import { Component, OnInit } from '@angular/core';
import { EmployeeTaxService } from '../employee-tax-services/employee-tax.service';

@Component({
  selector: 'app-employee-tax-list',
  templateUrl: './employee-tax-list.component.html',
  styleUrls: ['./employee-tax-list.component.scss']
})
export class EmployeeTaxListComponent implements OnInit {

  _taxList:any;

  constructor(private taxService: EmployeeTaxService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.taxService.getTax().subscribe( data =>{
      this._taxList = data;
    });
  }
  deleteTax(taxesId: number){
    this.taxService.deleteTax(taxesId).subscribe(() => {
      console.log('Deleted!');
    });
    this._taxList.splice(0,1);
  }
}
