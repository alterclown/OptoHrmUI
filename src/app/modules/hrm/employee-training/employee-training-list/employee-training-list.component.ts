import { Component, OnInit } from '@angular/core';
import { EmployeeTrainingService } from '../employee-training-services/employee-training.service';



@Component({
  selector: 'app-employee-training-list',
  templateUrl: './employee-training-list.component.html',
  styleUrls: ['./employee-training-list.component.scss']
})
export class EmployeeTrainingListComponent implements OnInit {
_trainingList:any;
  constructor(private trainingService:EmployeeTrainingService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.trainingService.getTraining().subscribe( data =>{
      this._trainingList = data;
    });
  }
  deleteTraining(leaveId: number){
    this.trainingService.deleteTraining(leaveId).subscribe(() => {
      console.log('Deleted!');
    });
    this._trainingList.splice(0,1);
  }
}
