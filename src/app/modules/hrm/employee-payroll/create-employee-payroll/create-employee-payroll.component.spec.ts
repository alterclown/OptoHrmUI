import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeePayrollComponent } from './create-employee-payroll.component';

describe('CreateEmployeePayrollComponent', () => {
  let component: CreateEmployeePayrollComponent;
  let fixture: ComponentFixture<CreateEmployeePayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeePayrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeePayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
