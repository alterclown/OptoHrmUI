import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeCertificationComponent } from './update-employee-certification.component';

describe('UpdateEmployeeCertificationComponent', () => {
  let component: UpdateEmployeeCertificationComponent;
  let fixture: ComponentFixture<UpdateEmployeeCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
