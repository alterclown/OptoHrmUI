import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EducationService } from '../services/education.service';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.scss']
})
export class UpdateEducationComponent implements OnInit {
  educationForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router,private educationService:EducationService, private _avRoute:ActivatedRoute) {
    this.submitEducation();
  }

  ngOnInit(): void {
    this.submitEducation();
    this.getEducationData();
  }
  submitEducation() {
    this.educationForm = this.fb.group({
      EducationName: [''],
      Description: [''],
    });
  }

  getEducationData() {
    this.educationService.getEducationById(this._avRoute.snapshot.params.id).subscribe(data => {
      console.log(data)
      this.educationForm = this.fb.group({
        EducationName: (data['educationName']),
        Description: (data['description'])
      });
    });
  }
  
    onUpdate(){
      this.educationService.putEducation(this._avRoute.snapshot.params.id,this.educationForm.value).subscribe(data =>{
        console.log(data);
      });
   }

}
