import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentstatusListComponent } from './employmentstatus-list.component';

describe('EmploymentstatusListComponent', () => {
  let component: EmploymentstatusListComponent;
  let fixture: ComponentFixture<EmploymentstatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentstatusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentstatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
