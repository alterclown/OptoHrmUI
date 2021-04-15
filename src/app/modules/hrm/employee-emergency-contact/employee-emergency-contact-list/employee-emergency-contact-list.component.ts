import { Component, OnInit } from '@angular/core';
import { EmployeeEmergencyContactService } from '../services/employee-emergency-contact.service';

@Component({
  selector: 'app-employee-emergency-contact-list',
  templateUrl: './employee-emergency-contact-list.component.html',
  styleUrls: ['./employee-emergency-contact-list.component.scss']
})
export class EmployeeEmergencyContactListComponent implements OnInit {
  _employeeContactList:any;
  showSpinner = true;
  constructor(private employeeEmergencyContactService: EmployeeEmergencyContactService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.employeeEmergencyContactService.getEmployeeEmergencyContact().subscribe( data =>{
      this._employeeContactList = data;
      this.showSpinner= false;
    });
  }
  deleteEmployeeEmergencyContact(employeeContactId: number){
    this.employeeEmergencyContactService.deleteEmployeeEmergencyContact(employeeContactId).subscribe(() => {
      console.log('Deleted!');
    });
    this._employeeContactList.splice(0,1);
  }
}
