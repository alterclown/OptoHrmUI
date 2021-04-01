import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeExpenseComponent } from './update-employee-expense.component';

describe('UpdateEmployeeExpenseComponent', () => {
  let component: UpdateEmployeeExpenseComponent;
  let fixture: ComponentFixture<UpdateEmployeeExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
