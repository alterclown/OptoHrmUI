import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { EmployeeDesignationService } from '../designation-services/designation-service';

@Component({
  selector: 'app-update-designation',
  templateUrl: './update-designation.component.html',
  styleUrls: ['./update-designation.component.scss']
})
export class UpdateDesignationComponent implements OnInit {
  designationForm: FormGroup;
  constructor(private fb: FormBuilder,private _designationService: EmployeeDesignationService,private _router: Router,private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitDesignantion();
    this.getDesignationById();
  }
  getDesignationById(){
    this._designationService.getDesignationId(this._avRoute.snapshot.params.id).subscribe(data => {
    this.designationForm = this.fb.group({
      EmployeeId: (data['employeeId']),
      PositionName: (data['positionName']),
      CompanyId :Authentication.getCompanyIdFromLocalStorage(),
      UserId :Authentication.getUserIdFromLocalStorage()
    });
  });
  }
  submitDesignantion(){
    this.designationForm = this.fb.group({
      EmployeeId: [''],
      PositionName: [''],
      CompanyId :Authentication.getCompanyIdFromLocalStorage(),
      UserId :Authentication.getUserIdFromLocalStorage()
    });
  }
  onUpdate(){
    this._designationService.putDesignation(this._avRoute.snapshot.params.id,this.designationForm.value).subscribe(data =>{
      console.log(data);
      //this._router.navigate(['company']);
    });
 }

}
