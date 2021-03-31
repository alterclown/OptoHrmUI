import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDependentListComponent } from './employee-dependent-list.component';

describe('EmployeeDependentListComponent', () => {
  let component: EmployeeDependentListComponent;
  let fixture: ComponentFixture<EmployeeDependentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDependentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDependentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
