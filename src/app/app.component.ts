import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from './modules/shared-services/Authentication.service';
import { presetColors } from 'ng-zorro-antd/core/color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = true;
  isAuthenticated = true;
  userName: string;
  constructor(private _router: Router) { }
  ngOnInit() {
    this.isAuthenticated = Authentication.isAuthenticated();
    this.userName = Authentication.getUserNameLocalStorage();
  }
  logOut() {
    Authentication.logOutFromLocalStorage();
    this._router.navigate(['login']);
  }
}
