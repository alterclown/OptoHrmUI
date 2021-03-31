import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeCertificationComponent } from './create-employee-certification.component';

describe('CreateEmployeeCertificationComponent', () => {
  let component: CreateEmployeeCertificationComponent;
  let fixture: ComponentFixture<CreateEmployeeCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
