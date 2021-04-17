import { Component, OnInit } from '@angular/core';
import { EmployeeProjectService } from '../services/employee-project.service';

@Component({
  selector: 'app-employee-project-list',
  templateUrl: './employee-project-list.component.html',
  styleUrls: ['./employee-project-list.component.scss']
})
export class EmployeeProjectListComponent implements OnInit {
_projectList:any;
showSpinner = true;
  constructor(private projectService: EmployeeProjectService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.projectService.getEmployeeProject().subscribe( data =>{
      this._projectList = data;
      this.showSpinner = false;
    });
  }
  deleteProject(employeeProjectId: number){
    this.projectService.deleteEmployeeProject(employeeProjectId).subscribe(() => {
      console.log('Deleted!');
    });
    this._projectList.splice(0,1);
  }

}
