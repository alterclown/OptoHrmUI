import { Component, OnInit } from '@angular/core';
import { JobTitleService } from '../services/job-title.service';

@Component({
  selector: 'app-job-title-list',
  templateUrl: './job-title-list.component.html',
  styleUrls: ['./job-title-list.component.scss']
})
export class JobTitleListComponent implements OnInit {

  _jobTitleList: any;
  showSpinner = true;
  constructor(private jobTitleService: JobTitleService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.jobTitleService.getJobTitle().subscribe(data => {
      this._jobTitleList = data;
      this.showSpinner = false;
    });
  }
  deleteJobTitle(employeeSkillsId: number) {
    this.jobTitleService.deleteJobTitle(employeeSkillsId).subscribe(() => {
      console.log('Deleted!');
    });
    this._jobTitleList.splice(0, 1);
  }

}
