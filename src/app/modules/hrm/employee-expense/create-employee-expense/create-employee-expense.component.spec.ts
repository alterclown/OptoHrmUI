import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeExpenseComponent } from './create-employee-expense.component';

describe('CreateEmployeeExpenseComponent', () => {
  let component: CreateEmployeeExpenseComponent;
  let fixture: ComponentFixture<CreateEmployeeExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
