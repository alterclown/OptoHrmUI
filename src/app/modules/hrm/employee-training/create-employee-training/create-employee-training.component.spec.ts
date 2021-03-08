import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeTrainingComponent } from './create-employee-training.component';

describe('CreateEmployeeTrainingComponent', () => {
  let component: CreateEmployeeTrainingComponent;
  let fixture: ComponentFixture<CreateEmployeeTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
