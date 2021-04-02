import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMonitorAttendanceComponent } from './create-monitor-attendance.component';

describe('CreateMonitorAttendanceComponent', () => {
  let component: CreateMonitorAttendanceComponent;
  let fixture: ComponentFixture<CreateMonitorAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMonitorAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMonitorAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
