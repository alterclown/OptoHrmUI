import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCertificationComponent } from './employee-certification.component';

describe('EmployeeCertificationComponent', () => {
  let component: EmployeeCertificationComponent;
  let fixture: ComponentFixture<EmployeeCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
