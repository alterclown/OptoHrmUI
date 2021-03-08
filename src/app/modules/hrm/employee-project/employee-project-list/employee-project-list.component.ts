import { Component, OnInit } from '@angular/core';
import { EmployeeProjectService } from '../services/employee-project.service';

@Component({
  selector: 'app-employee-project-list',
  templateUrl: './employee-project-list.component.html',
  styleUrls: ['./employee-project-list.component.scss']
})
export class EmployeeProjectListComponent implements OnInit {
_projectList:any;
  constructor(private projectService: EmployeeProjectService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.projectService.getProject().subscribe( data =>{
      this._projectList = data;
    });
  }
  deleteProject(projectHandleId: number){
    this.projectService.deleteProject(projectHandleId).subscribe(() => {
      console.log('Deleted!');
    });
    this._projectList.splice(0,1);
  }

}
