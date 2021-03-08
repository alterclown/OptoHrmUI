import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeProjectComponent } from './update-employee-project.component';

describe('UpdateEmployeeProjectComponent', () => {
  let component: UpdateEmployeeProjectComponent;
  let fixture: ComponentFixture<UpdateEmployeeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
