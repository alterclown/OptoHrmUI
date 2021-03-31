import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeArchivedListComponent } from './employee-archived-list.component';

describe('EmployeeArchivedListComponent', () => {
  let component: EmployeeArchivedListComponent;
  let fixture: ComponentFixture<EmployeeArchivedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeArchivedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeArchivedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
