import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeLoanComponent } from './update-employee-loan.component';

describe('UpdateEmployeeLoanComponent', () => {
  let component: UpdateEmployeeLoanComponent;
  let fixture: ComponentFixture<UpdateEmployeeLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
