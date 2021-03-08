import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeLoanComponent } from './create-employee-loan.component';

describe('CreateEmployeeLoanComponent', () => {
  let component: CreateEmployeeLoanComponent;
  let fixture: ComponentFixture<CreateEmployeeLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
