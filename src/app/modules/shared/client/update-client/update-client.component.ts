import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
  clientForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router,private clientService:ClientService, private _avRoute:ActivatedRoute) {
    this.submitClient();
  }

  ngOnInit(): void {
    this.submitClient();
    this.getClientData();
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
      FirstContactDate: ['']
    });
  }

  getClientData() {
    this.clientService.getClientById(this._avRoute.snapshot.params.id).subscribe(data => {
      console.log(data)
      this.clientForm = this.fb.group({
        ClientName: (data['clientName']),
        Details: (data['details']),
        Address:(data['address']),
        ContactNumber: (data['contactNumber']),
        ContactEmail: (data['contactEmail']),
        CompanyUrl: (data['companyUrl']),
        Status: (data['status']),
        FirstContactDate: (data['firstContactDate']),
      });
    });
  }
  
    onSubmit(){
      this.clientService.putClient(this._avRoute.snapshot.params.id,this.clientForm.value).subscribe(data =>{
        console.log(data);
        this._router.navigate(['employee']);

      });
   }
}
