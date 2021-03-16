import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './hrm-login-services/hrm-login.service';
import { User } from './models/user';

@Component({
  selector: 'app-hrm-login',
  templateUrl: './hrm-login.component.html',
  styleUrls: ['./hrm-login.component.scss']
})
export class HrmLoginComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private _loginService: LoginService, private _router: Router, private _avRoute: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    this.submitUser();
  }
  submitUser() {
    this.userForm = this.fb.group({
      Email: [''],
      Password: ['']
    });
  }
  onSubmit() {
    this._loginService.postUser(this.userForm.value).subscribe(data => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      this._router.navigate(['dashboard']);
    });
  }
}
