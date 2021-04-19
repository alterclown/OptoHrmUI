import { Component, OnInit } from '@angular/core';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  _skillList: any;
  showSpinner = true;
  constructor(private skillService: SkillService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.skillService.getSkill().subscribe(data => {
      this._skillList = data;
      this.showSpinner = false;
    });
  }
  deleteSkill(payGradeId: number) {
    this.skillService.deleteSkill(payGradeId).subscribe(() => {
      console.log('Deleted!');
    });
    this._skillList.splice(0, 1);
  }

}
