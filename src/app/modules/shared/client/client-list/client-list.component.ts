import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clientList:any;
  constructor(private clientService:ClientService,private _router: Router) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.clientService.getClientData().subscribe( data =>{
      this.clientList = data;
    });
  }
  deleteClient(clientId){
    this.clientService.deleteClient(clientId).subscribe(() => {
      console.log('Deleted!');
    });
    this.clientList.splice(0,1);
    //this.getData();
  }
}
