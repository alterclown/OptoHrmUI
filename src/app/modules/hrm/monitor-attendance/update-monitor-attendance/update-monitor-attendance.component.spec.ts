import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMonitorAttendanceComponent } from './update-monitor-attendance.component';

describe('UpdateMonitorAttendanceComponent', () => {
  let component: UpdateMonitorAttendanceComponent;
  let fixture: ComponentFixture<UpdateMonitorAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMonitorAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMonitorAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
