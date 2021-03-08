import { Component, OnInit } from '@angular/core';
import { EmployeeDesignationService } from '../designation-services/designation-service';

@Component({
  selector: 'app-designation-list',
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.scss']
})
export class DesignationListComponent implements OnInit {
  _designationList:any;
  constructor(private designationService: EmployeeDesignationService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.designationService.getDesignation().subscribe( data =>{
      this._designationList = data;
    });
  }
  deleteDesignation(positionId: number){
    this.designationService.deleteDesignation(positionId).subscribe(() => {
      console.log('Deleted!');
    });
    this._designationList.splice(0,1);
  }
  

}
