import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeDependentComponent } from './create-employee-dependent.component';

describe('CreateEmployeeDependentComponent', () => {
  let component: CreateEmployeeDependentComponent;
  let fixture: ComponentFixture<CreateEmployeeDependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeDependentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
