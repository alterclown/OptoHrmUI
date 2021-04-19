import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authentication } from 'src/app/modules/shared-services/Authentication.service';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.scss']
})
export class CreateSkillComponent implements OnInit {

  skillForm: FormGroup;
  constructor(private fb: FormBuilder, private skillService: SkillService) {
    this.submitSkill();
  }

  ngOnInit(): void {
    this.submitSkill();
  }
  submitSkill() {
    this.skillForm = this.fb.group({
      SkillName: [''],
      Description: [''],
      CompanyId: Authentication.getCompanyIdFromLocalStorage()
    });
  }
  onSubmit() {
    this.skillService.postSkill(this.skillForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
