import { Component, OnInit } from '@angular/core';
import { LoanTypeService } from '../services/loan-type.service';

@Component({
  selector: 'app-loan-type-list',
  templateUrl: './loan-type-list.component.html',
  styleUrls: ['./loan-type-list.component.scss']
})
export class LoanTypeListComponent implements OnInit {

  _loanTypeList: any;
  showSpinner = true;
  constructor(private loanTypeService: LoanTypeService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loanTypeService.getLoanType().subscribe(data => {
      this._loanTypeList = data;
      this.showSpinner = false;
    });
  }
  deleteLoanType(loanTypeId: number) {
    this.loanTypeService.deleteLoanType(loanTypeId).subscribe(() => {
      console.log('Deleted!');
    });
    this._loanTypeList.splice(0, 1);
  }

}
