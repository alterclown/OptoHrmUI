import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificationService } from '../services/certification.service';

@Component({
  selector: 'app-certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.scss']
})
export class CertificationListComponent implements OnInit {
  certificaitonList:any;
  constructor(private _certificationService: CertificationService,private _router: Router) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this._certificationService.getCertificationData().subscribe( data =>{
      this.certificaitonList = data;
    });
  }
  deleteCertification(certificationId){
    this._certificationService.deleteCertification(certificationId).subscribe(() => {
      console.log('Deleted!');
    });
    this.certificaitonList.splice(0,1);
    //this.getData();
  }

}
