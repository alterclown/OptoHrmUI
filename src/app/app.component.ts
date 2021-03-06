import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from './modules/shared-services/Authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = true;
  isAuthenticated = true;
  userName: string;
  isVisibleMiddle=false;
  constructor(private _router: Router) { }
  ngOnInit() {
    this.isAuthenticated = Authentication.isAuthenticated();
    this.userName = Authentication.getUserNameLocalStorage();
  }
  logOut() {
    Authentication.logOutFromLocalStorage();
    window.location.href = "";
  }
  handleOkMiddle(): void {
   this.logOut();
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }
}
