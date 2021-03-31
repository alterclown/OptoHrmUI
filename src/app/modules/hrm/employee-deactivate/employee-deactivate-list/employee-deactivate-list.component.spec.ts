import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeactivateListComponent } from './employee-deactivate-list.component';

describe('EmployeeDeactivateListComponent', () => {
  let component: EmployeeDeactivateListComponent;
  let fixture: ComponentFixture<EmployeeDeactivateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDeactivateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeactivateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
