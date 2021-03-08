import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeTrainingComponent } from './update-employee-training.component';

describe('UpdateEmployeeTrainingComponent', () => {
  let component: UpdateEmployeeTrainingComponent;
  let fixture: ComponentFixture<UpdateEmployeeTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
