import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmploymentStatusService } from '../services/employmentStatus.service';

@Component({
  selector: 'app-update-employment-status',
  templateUrl: './update-employment-status.component.html',
  styleUrls: ['./update-employment-status.component.scss']
})
export class UpdateEmploymentStatusComponent implements OnInit {
  employmentStatusForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router,private employmentStatusService:EmploymentStatusService, private _avRoute:ActivatedRoute) {
    this.submitEducation();
  }

  ngOnInit(): void {
    this.submitEducation();
    this.getEducationData();
  }
  submitEducation() {
    this.employmentStatusForm = this.fb.group({
      EmploymentStatusName:[''],
      Description:[''],
    });
  }

  getEducationData() {
    this.employmentStatusService.getEmploymentStatusById(this._avRoute.snapshot.params.id).subscribe(data => {
      console.log(data)
      this.employmentStatusForm = this.fb.group({
        EmploymentStatusName: (data['employmentStatusName']),
        Description: (data['description'])
      });
    });
  }
  
    onUpdate(){
      this.employmentStatusService.putEmploymentStatus(this._avRoute.snapshot.params.id,this.employmentStatusForm.value).subscribe(data =>{
        console.log(data);
      });
   }

}
