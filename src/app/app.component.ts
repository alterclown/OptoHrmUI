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
  user: string;
  constructor(private _router: Router) { }
  ngOnInit() {
     this.user  = Authentication.getUserEmailFromLocalStorage();
   }
  logOut() {
    Authentication.logOutFromLocalStorage();
    this._router.navigate(['']);
  }
}
