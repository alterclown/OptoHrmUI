import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorAttendanceListComponent } from './monitor-attendance-list.component';

describe('MonitorAttendanceIstComponent', () => {
  let component: MonitorAttendanceListComponent;
  let fixture: ComponentFixture<MonitorAttendanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorAttendanceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorAttendanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
