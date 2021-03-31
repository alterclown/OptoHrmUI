import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeArchivedComponent } from './create-employee-archived.component';

describe('CreateEmployeeArchivedComponent', () => {
  let component: CreateEmployeeArchivedComponent;
  let fixture: ComponentFixture<CreateEmployeeArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeArchivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
