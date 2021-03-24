import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isCollapsed = true;

  constructor(private _router: Router) { }
  ngOnInit() { }
  logOut() {
    Authentication.logOutFromLocalStorage();
    this._router.navigate(['login']);
  }

}
