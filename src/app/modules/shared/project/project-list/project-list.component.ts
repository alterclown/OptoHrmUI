import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  _projectList: any;
  showSpinner = true;
  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.projectService.getProject().subscribe(data => {
      this._projectList = data;
      this.showSpinner = false;
    });
  }
  deleteProject(payGradeId: number) {
    this.projectService.deleteProject(payGradeId).subscribe(() => {
      console.log('Deleted!');
    });
    this._projectList.splice(0, 1);
  }


}
