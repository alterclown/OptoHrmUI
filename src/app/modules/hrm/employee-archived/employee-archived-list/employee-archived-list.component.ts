import { Component, OnInit } from '@angular/core';
import { EmployeeArchiveService } from '../services/employee-archive.service';

@Component({
  selector: 'app-employee-archived-list',
  templateUrl: './employee-archived-list.component.html',
  styleUrls: ['./employee-archived-list.component.scss']
})
export class EmployeeArchivedListComponent implements OnInit {

  _archiveList:any;
  constructor(private employeeArchiveService: EmployeeArchiveService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.employeeArchiveService.getEmployeeArchive().subscribe( data =>{
      this._archiveList = data;
      //this.firstName = JSON.stringify( data );
    });
  }
  deleteArchive(employeeArchivedId: number){
    this.employeeArchiveService.deleteEmployeeArchive(employeeArchivedId).subscribe(() => {
      console.log('Deleted!');
    });
    this._archiveList.splice(0,1);
  }

}
