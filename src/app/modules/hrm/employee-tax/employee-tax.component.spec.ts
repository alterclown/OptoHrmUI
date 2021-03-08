import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTaxComponent } from './employee-tax.component';

describe('EmployeeTaxComponent', () => {
  let component: EmployeeTaxComponent;
  let fixture: ComponentFixture<EmployeeTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
