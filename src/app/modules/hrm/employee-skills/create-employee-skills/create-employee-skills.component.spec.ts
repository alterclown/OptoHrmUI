import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeSkillsComponent } from './create-employee-skills.component';

describe('CreateEmployeeSkillsComponent', () => {
  let component: CreateEmployeeSkillsComponent;
  let fixture: ComponentFixture<CreateEmployeeSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
