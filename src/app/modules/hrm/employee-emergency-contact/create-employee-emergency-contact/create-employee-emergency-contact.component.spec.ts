import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeEmergencyContactComponent } from './create-employee-emergency-contact.component';

describe('CreateEmployeeEmergencyContactComponent', () => {
  let component: CreateEmployeeEmergencyContactComponent;
  let fixture: ComponentFixture<CreateEmployeeEmergencyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeEmergencyContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeEmergencyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
