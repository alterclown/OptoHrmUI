import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLoanListComponent } from './employee-loan-list.component';

describe('EmployeeLoanListComponent', () => {
  let component: EmployeeLoanListComponent;
  let fixture: ComponentFixture<EmployeeLoanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLoanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLoanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
