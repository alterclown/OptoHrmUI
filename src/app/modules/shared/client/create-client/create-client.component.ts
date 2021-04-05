import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  clientForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router,private clientService:ClientService) {
    this.submitClient();
  }

  ngOnInit(): void {
    this.submitClient();
  }
  submitClient() {
    this.clientForm = this.fb.group({
      ClientName: [''],
      Details: [''],
      Address: [''],
      ContactNumber: [''],
      ContactEmail: [''],
      CompanyUrl: [''],
      Status: [''],
      FirstContactDate: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage()
    });
  }
    onSubmit(){
      this.clientService.postClient(this.clientForm.value).subscribe(data =>{
        console.log(data);
        //this._router.navigate(['employee']);
      });
   }

}
