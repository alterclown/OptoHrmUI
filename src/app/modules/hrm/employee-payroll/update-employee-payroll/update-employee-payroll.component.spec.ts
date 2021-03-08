import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeePayrollComponent } from './update-employee-payroll.component';

describe('UpdateEmployeePayrollComponent', () => {
  let component: UpdateEmployeePayrollComponent;
  let fixture: ComponentFixture<UpdateEmployeePayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeePayrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeePayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
