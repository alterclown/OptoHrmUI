import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCertificationListComponent } from './employee-certification-list.component';

describe('EmployeeCertificationListComponent', () => {
  let component: EmployeeCertificationListComponent;
  let fixture: ComponentFixture<EmployeeCertificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCertificationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCertificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
