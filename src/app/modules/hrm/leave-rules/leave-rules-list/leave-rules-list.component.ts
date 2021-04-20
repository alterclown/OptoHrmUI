import { Component, OnInit } from '@angular/core';
import { LeaveRulesService } from '../services/leave-rule.service';

@Component({
  selector: 'app-leave-rules-list',
  templateUrl: './leave-rules-list.component.html',
  styleUrls: ['./leave-rules-list.component.scss']
})
export class LeaveRulesListComponent implements OnInit {

  _leaveRulesList: any;
  showSpinner = true;
  constructor(private leaveRulesService: LeaveRulesService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.leaveRulesService.getLeaveRules().subscribe(data => {
      this._leaveRulesList = data;
      this.showSpinner = false;
    });
  }
  deleteLeaveRules(leaveRulesId: number) {
    this.leaveRulesService.deleteLeaveRules(leaveRulesId).subscribe(() => {
      console.log('Deleted!');
    });
    this._leaveRulesList.splice(0, 1);
  }

}
