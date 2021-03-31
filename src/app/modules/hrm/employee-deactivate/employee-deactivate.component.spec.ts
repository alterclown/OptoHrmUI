import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeactivateComponent } from './employee-deactivate.component';

describe('EmployeeDeactivateComponent', () => {
  let component: EmployeeDeactivateComponent;
  let fixture: ComponentFixture<EmployeeDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDeactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
