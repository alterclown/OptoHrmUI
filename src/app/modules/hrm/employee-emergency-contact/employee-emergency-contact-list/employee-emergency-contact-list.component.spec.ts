import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEmergencyContactListComponent } from './employee-emergency-contact-list.component';

describe('EmployeeEmergencyContactListComponent', () => {
  let component: EmployeeEmergencyContactListComponent;
  let fixture: ComponentFixture<EmployeeEmergencyContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEmergencyContactListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEmergencyContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
