import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeArchivedComponent } from './employee-archived.component';

describe('EmployeeArchivedComponent', () => {
  let component: EmployeeArchivedComponent;
  let fixture: ComponentFixture<EmployeeArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeArchivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
