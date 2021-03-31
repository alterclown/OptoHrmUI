import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeEmergencyContactComponent } from './update-employee-emergency-contact.component';

describe('UpdateEmployeeEmergencyContactComponent', () => {
  let component: UpdateEmployeeEmergencyContactComponent;
  let fixture: ComponentFixture<UpdateEmployeeEmergencyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeEmergencyContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeEmergencyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
