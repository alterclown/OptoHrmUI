import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeSkillsComponent } from './update-employee-skills.component';

describe('UpdateEmployeeSkillsComponent', () => {
  let component: UpdateEmployeeSkillsComponent;
  let fixture: ComponentFixture<UpdateEmployeeSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
