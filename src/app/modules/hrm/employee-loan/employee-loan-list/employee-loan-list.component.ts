import { Component, OnInit } from '@angular/core';
import { EmployeeLoanService } from '../employee-loan-services/employee-loan.service';

@Component({
  selector: 'app-employee-loan-list',
  templateUrl: './employee-loan-list.component.html',
  styleUrls: ['./employee-loan-list.component.scss']
})
export class EmployeeLoanListComponent implements OnInit {
_loanList:any;
  constructor(private loanService: EmployeeLoanService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.loanService.getLoan().subscribe( data =>{
      this._loanList = data;
    });
  }
  deleteLoan(loanId: number){
    this.loanService.deleteLoan(loanId).subscribe(() => {
      console.log('Deleted!');
    });
    this._loanList.splice(0,1);
  }

}
