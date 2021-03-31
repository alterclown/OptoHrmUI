import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeDeactivateComponent } from './create-employee-deactivate.component';

describe('CreateEmployeeDeactivateComponent', () => {
  let component: CreateEmployeeDeactivateComponent;
  let fixture: ComponentFixture<CreateEmployeeDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeDeactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
