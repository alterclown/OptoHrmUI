import { Component, OnInit } from '@angular/core';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { LoginService } from '../hrm-login/hrm-login-services/hrm-login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isCollapsed = true;
  user:string;
  constructor(private _loginService: LoginService) { 
  }
  ngOnInit(): void {
   this.user = Authentication.getUserIdFromLocalStorage()
  }

}
