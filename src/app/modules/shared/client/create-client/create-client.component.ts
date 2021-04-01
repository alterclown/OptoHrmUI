import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  clientForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router) {
    this.submitClient();
  }

  ngOnInit(): void {
    this.submitClient();
  }
  submitClient() {
    this.clientForm = this.fb.group({
      ClientId: [''],
      ClientName: [''],
      Details: [''],
      Address: [''],
      ContactNumber: [''],
      ContactEmail: [''],
      CompanyUrl: [''],
      Status: [''],
      FirstContactDate: [''],
      CompanyId: [''],
    });
  }
  //   onSubmit(){
  //     this.employeeService.postEmployee(this.employeeForm.value).subscribe(data =>{
  //       console.log(data);
  //       this._router.navigate(['employee']);

  //     });
  //  }

}
