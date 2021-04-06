import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmploymentStatusService } from '../services/employmentStatus.service';

@Component({
  selector: 'app-employmentstatus-list',
  templateUrl: './employmentstatus-list.component.html',
  styleUrls: ['./employmentstatus-list.component.scss']
})
export class EmploymentstatusListComponent implements OnInit {
  employmentStatusList:any;
  constructor(private employmentStatusService:EmploymentStatusService,private _router: Router) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.employmentStatusService.getEmploymentStatusData().subscribe( data =>{
      this.employmentStatusList = data;
    });
  }
  deleteEmploymentStatus(employmentStatusId){
    this.employmentStatusService.deleteEmploymentStatus(employmentStatusId).subscribe(() => {
      console.log('Deleted!');
    });
    this.employmentStatusList.splice(0,1);
    //this.getData();
  }

}
