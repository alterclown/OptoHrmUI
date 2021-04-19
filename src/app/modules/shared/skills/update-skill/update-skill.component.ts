import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.scss']
})
export class UpdateSkillComponent implements OnInit {

  skillForm: FormGroup;
  constructor(private fb: FormBuilder, private skillService: SkillService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitSkill();
  }

  ngOnInit(): void {
    this.submitSkill();
    this.getSkillId();
  }
  submitSkill() {
    this.skillForm = this.fb.group({
      SkillName: [''],
      Description: ['']
    });
  }
  onUpdate() {
    this.skillService.putSkill(this._avRoute.snapshot.params.id, this.skillForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getSkillId() {
    this.skillService.getSkillId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.skillForm = this.fb.group({
        SkillId: (data['skillId']),
        SkillName: (data['skillName']),
        Description: (data['description']),
        CompanyId: Authentication.getCompanyIdFromLocalStorage()
      });
    });
  }

}
