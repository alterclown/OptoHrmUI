import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeTaxComponent } from './update-employee-tax.component';

describe('UpdateEmployeeTaxComponent', () => {
  let component: UpdateEmployeeTaxComponent;
  let fixture: ComponentFixture<UpdateEmployeeTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
