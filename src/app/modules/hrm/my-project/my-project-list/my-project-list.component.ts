import { Component, OnInit } from '@angular/core';
import { MyProjectService } from '../services/my-project.service';

@Component({
  selector: 'app-my-project-list',
  templateUrl: './my-project-list.component.html',
  styleUrls: ['./my-project-list.component.scss']
})
export class MyProjectListComponent implements OnInit {

  _myProjectList: any;
  showSpinner = true;
  constructor(private myProjectService: MyProjectService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.myProjectService.getMyProject().subscribe(data => {
      this._myProjectList = data;
      this.showSpinner = false;
    });
  }
  deleteMyProject(myProjectId: number) {
    this.myProjectService.deleteMyProject(myProjectId).subscribe(() => {
      console.log('Deleted!');
    });
    this._myProjectList.splice(0, 1);
  }

}
