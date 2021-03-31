import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeDeactivateComponent } from './update-employee-deactivate.component';

describe('UpdateEmployeeDeactivateComponent', () => {
  let component: UpdateEmployeeDeactivateComponent;
  let fixture: ComponentFixture<UpdateEmployeeDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeDeactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
