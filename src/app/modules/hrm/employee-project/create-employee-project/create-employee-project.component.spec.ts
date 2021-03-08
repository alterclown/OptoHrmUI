import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeProjectComponent } from './create-employee-project.component';

describe('CreateEmployeeProjectComponent', () => {
  let component: CreateEmployeeProjectComponent;
  let fixture: ComponentFixture<CreateEmployeeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
