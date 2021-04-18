import { Component, OnInit } from '@angular/core';
import { PayGradeService } from '../services/pay-grade.service';

@Component({
  selector: 'app-paygrade-list',
  templateUrl: './paygrade-list.component.html',
  styleUrls: ['./paygrade-list.component.scss']
})
export class PaygradeListComponent implements OnInit {

  _payGradeList: any;
  showSpinner = true;
  constructor(private payGradeService: PayGradeService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.payGradeService.getPayGrade().subscribe(data => {
      this._payGradeList = data;
      this.showSpinner = false;
    });
  }
  deletePayGrade(payGradeId: number) {
    this.payGradeService.deletePayGrade(payGradeId).subscribe(() => {
      console.log('Deleted!');
    });
    this._payGradeList.splice(0, 1);
  }

}
