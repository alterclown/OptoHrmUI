import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeSalaryComponent } from './update-employee-salary.component';

describe('UpdateEmployeeSalaryComponent', () => {
  let component: UpdateEmployeeSalaryComponent;
  let fixture: ComponentFixture<UpdateEmployeeSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeSalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
