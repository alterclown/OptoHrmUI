import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducationService } from '../services/education.service';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent implements OnInit {
  educationList:any;
  constructor(private educationService:EducationService,private _router: Router) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.educationService.getEducationData().subscribe( data =>{
      this.educationList = data;
    });
  }
  deleteEducation(educationId){
    this.educationService.deleteEducation(educationId).subscribe(() => {
      console.log('Deleted!');
    });
    this.educationList.splice(0,1);
    //this.getData();
  }

}
