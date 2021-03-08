import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeTaxComponent } from './create-employee-tax.component';

describe('CreateEmployeeTaxComponent', () => {
  let component: CreateEmployeeTaxComponent;
  let fixture: ComponentFixture<CreateEmployeeTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
