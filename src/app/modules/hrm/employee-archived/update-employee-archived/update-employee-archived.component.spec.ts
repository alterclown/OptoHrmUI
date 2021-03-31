import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeArchivedComponent } from './update-employee-archived.component';

describe('UpdateEmployeeArchivedComponent', () => {
  let component: UpdateEmployeeArchivedComponent;
  let fixture: ComponentFixture<UpdateEmployeeArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeArchivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
