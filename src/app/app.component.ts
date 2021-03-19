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
  isUser = false;
  constructor(private _router: Router) { }
  ngOnInit() {
    this.isUser = Authentication.isAuthenticated();    
   }
  logOut() {
    Authentication.logOutFromLocalStorage();
    this._router.navigate(['']);
  }
}
